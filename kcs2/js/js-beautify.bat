@echo off
setlocal
set mainjs="D:\Download\main.js"
if not "%1"=="" set mainjs="%1"
echo Formatiing %mainjs%...
node node_modules\js-beautify\js\bin\js-beautify.js --config .\jsb-config.json %mainjs% > main.formatted.js
endlocal
