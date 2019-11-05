@echo off
setlocal
set mainjs="C:\Project\kancolle-html5\kcs2\js\main.js"
if not "%1"=="" if not "%1"=="-s" set mainjs="%1"
if "%1"=="-s" goto skipDownload
if "%2"=="-s" goto skipDownload
echo Downloading %mainjs%...
curl -R -o %mainjs% "http://203.104.209.71/kcs2/js/main.js" -H "Referer: http://203.104.209.71/kcs2/index.php" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0 Safari/537.36"
:skipDownload
echo Formatting %mainjs%...
rem npm install js-beautify
node node_modules\js-beautify\js\bin\js-beautify.js --config .\jsb-config.json %mainjs% > main.formatted.js
endlocal
