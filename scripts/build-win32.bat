set PLATFORM=%1%
set ARCH=%2%
set APP_NAME="QZone"

set ignore_list="dist scripts \.idea .*\.md .*\.yml node_modules/"
electron-packager . %APP_NAME% --platform=%PLATFORM% --arch=%ARCH% --electronVersion=1.4.15  --app-version=1.4.0 --asar=true --icon=assets\icon.png --overwrite --out=.\dist --ignore=%ignore_list%
