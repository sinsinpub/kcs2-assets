@echo off
setlocal
set gadgetip=203.104.209.7
set serverip=203.104.209.71
set referer="Referer: http://%serverip%/kcs2/index.php"
set useragent="User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0 Safari/537.36"
curl -RL -o gadget_html5\js\kcs_const.js "http://%gadgetip%/gadget_html5/js/kcs_const.js" -H %referer% -H %useragent%
curl -RL -o version.json "http://%serverip%/kcs2/version.json" -H %referer% -H %useragent%
endlocal
