# Ionic React Capacitor Full App with Firebase (Ionic V5) V4.0.1

This app is made with Ionic and React Frameworks. Capacitor is used for building the app to browser or Android/iOS devices.

Apart from this README, you can find detailed documentation of the app and features at [Ionic React Capacitor Full App](https://enappd.gitbook.io/ionic-react-capacitor-full-app/)

For Android builds, you'll need latest Android Studio.
For iOS builds, you'll need an Apple system with (latest) Xcode. 

# Setup
## Install Ionic and other dependencies

To use this app, you need to ensure you have node V10.16.0 installed in the system. 
With this, you can install all dependencies with one command
```
$ npm install
```
This will install all dependencies. 
If you see audit issues (vulnerabilities) in the above command, run
```
$ npm audit fix
```

## Building App 

### Browser
You can run the app in browser for development purpose simply with
```
$ ionic serve
```
The page will reload if you make edits.
You will also see any lint errors in the console.

Capacitor does not have any built-in feature to build web code. Instead, you will use your framework's build process of choice.

Regardless of your build process, we recommend adding a build script to your `package.json` to enable the standard frontend build command:

```
{
 "scripts": {
  "build": "command-to-build (ex: webpack, tsc, babel, etc.)"
 }
}
```
To build the app in production mode for browser
```
$ ionic build
```
The above command builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.  

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Android

Add android platform with 
```
$ npx cap add android
```
Once your web code is built, it needs to be copied to each native project using
```
npx cap copy
```
Repeat the above command before every new build.
Open Android IDE using
```
$ npx cap open android
```

(Although already configured) Configure your Android environment as per this [documentation](https://capacitorjs.com/docs/android/updating#from-less-151-to-200)

Set minimum SDK version to 25, as the libraries included have minimum SDK 25 supported. 


After that, build your app on device or simulator using Android Studio
**Note**: You should have your android studio version more then 3 to run this app
### iOS

Add iOS platform with 
```
$ npx cap add ios
```
Once your web code is built, it needs to be copied to each native project using
```
npx cap copy
```
Repeat the above command before every new build.
Open Xcode IDE using
```
$ npx cap open ios
```
After that, build your app on device or simulator using Xcode


At any point, if you have to rebuild the platform, just remove the platform folder, and repeat the steps above.

## Icons and Splash

Visit our blog for detailed instructions on how to create icon and Splash for your Ionic - React app 

[Custom icon and splash in Ionic React Capacitor apps](https://enappd.com/blog/icon-splash-in-ionic-react-capacitor-apps/114/)


# Setup Firebase in App

Create one .env File in your Project Root and paste your congif like this

```
FIREBASE_API_KEY= AIzaSyDctGeAZjwxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=ionic-react-app.firebaseapp.com
FIREBASE_DATABASE_URL=https://ionic-react-app.firebaseio.com
FIREBASE_PROJECT_ID=ionic-react-app
FIREBASE_STORAGE_BUCKET=ionic-react-app.appspot.com
FIREBASE_MESSAGING_SENDER_ID= 694030xxxxxx
FIREBASE_ID=1:6xxx5xxxx:web:a5da745xxxxxxxx
```

To get details on how to get `config`details and implement other Firebase functionalities, read our blogs on [Enappd Firebase Blogs]([https://enappd.com/blogcategory/5/](https://enappd.com/blogcategory/5/))

# Plugin Specific Inputs

Capacitor build the apps into a native code where plugins specific values need to be added manually.

## 1. AdMob 

### iOS
**Update Info.plist**
Open your App/App/Info.plist file and add this plist value line at the right spot (and replace the value by the actual App ID of your app!):

<!-- this two line needs to be added -->
```
<key>GADIsAdManagerApp</key>
<true/>

<key>GADApplicationIdentifier</key>
<!-- replace this value with your App ID key-->
<string>ca-app-pub-6564742920318187~7217030993</string>
```
### Android
**Update Manifest**
Open your android/app/src/Android/AndroidManifest.xml file and add this meta-data line at the right spot (and replace the value by the actual App ID of your app!):
```
<application>
  <!-- this line needs to be added (replace the value of AdMob AppID!) -->
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-3940256099942544~3347511713" />
  <activity></activity>
</application>
```
**Register AdMob to Capacitor Android**
Open your Ionic Capacitor App in Android Studio, Now open MainActivity.java of your app and Register AdMob to Capacitor Plugins.

```
// Other imports...
import app.xplatform.capacitor.plugins.AdMob;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{

      add(AdMob.class);  // Add AdMob as a Capacitor Plugin

    }});
  }
}
```

Detailed information about this plugin can be found at the [plugin page](https://github.com/rahadur/capacitor-admob)

## 2. Maps

For all Map related plugins and functionalities, you should use your own Google Maps API Key. 

Replace `YOUR_MAP_API_KEY` with your own Maps api key

## 3. Youtube

For the Youtube playlists, you should use your own YouTube API Key. 

Replace `YOUR_YOUTUBE_API_KEY` with your own YouTube api key

## 4. Youtube Player

Detailed information about this plugin can be found at the [plugin page](https://github.com/abritopach/capacitor-youtube-player)

### iOS:
Currently there is a small error when you testing the plugin in iOS. The following line of code needs to be modified in xcode:

YouTubePlayer.swift:339:102: 'UIWebViewNavigationType' has been renamed to 'UIWebView.NavigationType'

### ANDROID
You have to register Youtube Player plugin's class in your Acitivity so Capacitor is aware of it.
```
...
import com.abpjap.plugin.youtubeplayer.YoutubePlayer;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(YoutubePlayer.class); <= ADD THIS LINE
    }});
  }
}
```
Also swap in your YouTube API Key in `android/gradle.properties` or `android/local.properties` like following
```
YOUTUBE_API_KEY="YOUR_YOUTUBE_API_KEY"
```

## 5. Facebook Login
Detailed information about this plugin can be found at the [plugin page](https://github.com/rdlabo/capacitor-facebook-login)


### Android 
In file android/app/src/main/java/**/**/MainActivity.java, add the plugin to the initialization list:
```
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  [...]
  add(jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class);
  [...]
}});
```
In file android/app/src/main/AndroidManifest.xml, add the following XML elements under <manifest><application> :
```
<meta-data android:name="com.facebook.sdk.ApplicationId"
    android:value="@string/facebook_app_id"/>

<activity
    android:name="com.facebook.FacebookActivity"
    android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
    android:label="@string/app_name" />

<activity
    android:name="com.facebook.CustomTabActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="@string/fb_login_protocol_scheme" />
    </intent-filter>
</activity>
```
In file android/app/src/main/res/values/strings.xml add the following lines :
```
<string name="facebook_app_id">[APP_ID]</string>
<string name="fb_login_protocol_scheme">fb[APP_ID]</string>
```
Don't forget to replace [APP_ID] by your Facebook application Id.

More information can be found here: https://developers.facebook.com/docs/facebook-login/android

### iOS 
In file ios/App/App/AppDelegate.swift add or replace the following:
```
import FacebookCore
import FBSDKCoreKit
[...]
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  FBSDKCoreKit.ApplicationDelegate.shared.application(application, didFinishLaunchingWithOptions: launchOptions)

  return true
}

func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
  if CAPBridge.handleOpenUrl(url, options) {
    return FBSDKCoreKit.ApplicationDelegate.shared.application(app, open: url, options: options)
  }
  else{
    return false
  }
}
```
Add the following in the ios/App/App/info.plist file:
```
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb[APP_ID]</string>
    </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>[APP_ID]</string>
<key>FacebookDisplayName</key>
<string>Wimlov</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fbauth2</string>
</array>
```


# General Troubleshooting

* In iOS builds through Xcode, if you get an error similar to

```
The minimum iOS deployment target is 10.0, but Capacitor requires minimum 11.0

```
You will have to change the iOS deployment target of every Pod using Xcode. Preferrably every Pod should have similar deployment target. In the above case, say, 11.0

You can make this change by clicking on `Pods` folder in left sidemenu, then selecting `target` from dropdown. For each target, go to `Build Setting` -> search `Deployment Target` and set the minimum to 11.0

Repeat this for each Pod in the dropdown

* Sometimes, when you build in iOS, you get this error
```
Undefined symbol: _OBJC_CLASS_$_FBSDKAccessToken
Undefined symbol: _OBJC_CLASS_$_FBSDKLoginManager
```
Make sure you have Facebook App ID mentioned in the info.plist as mentioned in the `Facebook  Login` section above.
If the above checks, just clean your build folder using Xcode, and build again.

* In the Content Loader page (1), if you see a black box instead of the loader in iOS, just go to `public/index.html` and remove
`<base href="/" />`. This should resolve the issue

* In iOS, if you get an error like this
```
Method 'interstitialDidReceiveAd' must be declared public because it matches a requirement in public protocol 'GADInterstitialDelegate'
```
Declare all those functions public, either manually or by using XCode's quick fix option

* For above iOS issues, if the issue does not go away even after doing the required changes, try "cleaning" the build folder from `Product -> Clean Build Folder` option. This would help if it is a caching issue.