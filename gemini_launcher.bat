@echo off
set "TARGET_DIR=%~1"
if "%TARGET_DIR%"=="" set "TARGET_DIR=%cd%"
cd /d "%TARGET_DIR%"
set "NODE_SKIP_PLATFORM_CHECK=1"
node --no-warnings "C:\Users\PC\AppData\Roaming\npm\node_modules\@google\gemini-cli\bundle\gemini.js"
if %ERRORLEVEL% neq 0 pause