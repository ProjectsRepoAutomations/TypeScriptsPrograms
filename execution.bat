@echo off
REM Save all open files in Visual Studio Code using PowerShell to send keystrokes
powershell -command "$wshell = New-Object -ComObject wscript.shell; $wshell.AppActivate('Visual Studio Code'); Start-Sleep -Milliseconds 500; $wshell.SendKeys('^s')"

REM Wait for a moment to ensure files are saved
timeout /t 2 /nobreak

REM Clear the screen
cls

REM Compile TypeScript files
npx tsc
IF %ERRORLEVEL% NEQ 0 (
    echo TypeScript compilation failed.
    pause
    exit /b %ERRORLEVEL%
)

REM Run the compiled print.js file using Node.js
node print.js
IF %ERRORLEVEL% NEQ 0 (
    echo Execution of print.js failed.
    pause
    exit /b %ERRORLEVEL%
)

echo Batch file execution completed.
pause
