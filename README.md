# Run

### Install for IDE
Run is a app wich combines physical activity and farming.
If you run with app, you drop coins and you can buy a many game item.

For use, install NodeJs. After just install module :
```
npm install
```

You need to install CocoaPods :
```
sudo gem install cocoapods
```

### Install for Xcode
Go in `Preferences->Locations` and select last Command Line Tools.
Go in `Preferences->Components` and download a Emulator.

### Run app
+ run `npx react-native start`
+ in other terminal, run `npx react-native run-ios`

If you have a bug with last command, try :
+ on /projet file/ios you have a Podfile.lock, delete this
+ open projet file on terminal
+ run `cd ios`
+ run `pod install`
+ run `cd..`
+ run `npx react-native run-ios`



 
