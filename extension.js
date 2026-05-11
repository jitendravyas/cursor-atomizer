'use strict';
var vscode_1 = require('vscode');
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

function activate(context) {
    console.log('[Atomizer] Extension activated');
    var controller = new AtomizerController();
    context.subscriptions.push(controller);
}

exports.activate = activate;

var AtomizerController = (function () {
    function AtomizerController() {
        var subscriptions = [];
        
        // Listen for document save events
        vscode_1.workspace.onDidSaveTextDocument(this._onDocumentSaved, this, subscriptions);
        
        console.log('[Atomizer] Initialized document save listener');
        this._disposable = vscode_1.Disposable.from.apply(vscode_1.Disposable, subscriptions);
    }
    
    AtomizerController.prototype.dispose = function () {
        this._disposable.dispose();
    };
    
    AtomizerController.prototype._onDocumentSaved = function (document) {
        try {
            // Get the workspace folder
            var workspaceFolder = vscode_1.workspace.getWorkspaceFolder(document.uri);
            
            if (!workspaceFolder) {
                console.log('[Atomizer] No workspace folder found');
                return;
            }
            
            var root = workspaceFolder.uri.fsPath;
            var atomizeConfigPath = path.join(root, 'atomizer.json');
            
            // Check if atomizer.json exists
            if (!fs.existsSync(atomizeConfigPath)) {
                console.log('[Atomizer] atomizer.json not found in', root);
                return;
            }
            
            console.log('[Atomizer] Processing file:', document.fileName);
            
            // Load atomizer configuration
            var json = require(atomizeConfigPath);
            
            if (!json.input || !json.output) {
                console.error('[Atomizer] Invalid atomizer.json: missing input or output');
                return;
            }
            
            // Create temporary config file
            var tempConfigPath = path.join(root, '.atomizer-config.js');
            var configContent = 'module.exports = ' + JSON.stringify(json.config || {});
            
            fs.writeFileSync(tempConfigPath, configContent);
            console.log('[Atomizer] Created temporary config file');
            
            // Build and execute atomizer command
            var atomizeCmd = path.join(__dirname, 'node_modules', 'atomizer', 'bin', 'atomizer');
            var cmd = '"' + atomizeCmd + '" -c "' + tempConfigPath + '" -o "' + path.join(root, json.output) + '" "' + path.join(root, json.input) + '"';
            
            console.log('[Atomizer] Executing:', cmd);
            
            exec(cmd, { cwd: root }, function(error, stdout, stderr) {
                try {
                    // Clean up temporary config file
                    if (fs.existsSync(tempConfigPath)) {
                        fs.unlinkSync(tempConfigPath);
                        console.log('[Atomizer] Cleaned up temporary config file');
                    }
                    
                    if (error) {
                        console.error('[Atomizer] Error executing atomizer:', error.message);
                        if (stderr) {
                            console.error('[Atomizer] stderr:', stderr);
                        }
                        return;
                    }
                    
                    if (stdout) {
                        console.log('[Atomizer] Output:', stdout);
                    }
                    
                    console.log('[Atomizer] CSS generated successfully');
                    vscode_1.window.showInformationMessage('Atomic CSS generated successfully');
                    
                } catch (cleanupError) {
                    console.error('[Atomizer] Error during cleanup:', cleanupError);
                }
            });
            
        } catch (error) {
            console.error('[Atomizer] Unexpected error:', error);
            vscode_1.window.showErrorMessage('[Atomizer] Error: ' + error.message);
        }
    };
    
    return AtomizerController;
}());
