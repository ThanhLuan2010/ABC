
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @invertase/react-native-apple-authentication
import com.RNAppleAuthentication.AppleAuthenticationAndroidPackage;
// @react-native-async-storage/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-clipboard/clipboard
import com.reactnativecommunity.clipboard.ClipboardPackage;
// @react-native-community/art
import com.reactnativecommunity.art.ARTPackage;
// @react-native-community/datetimepicker
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// @react-native-firebase/app
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
// @react-native-firebase/auth
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
// @react-native-firebase/database
import io.invertase.firebase.database.ReactNativeFirebaseDatabasePackage;
// @react-native-firebase/messaging
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
// @react-native-google-signin/google-signin
import com.reactnativegooglesignin.RNGoogleSigninPackage;
// appcenter
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
// appcenter-analytics
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
// appcenter-crashes
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
// curved-bottom-navigation-bar
import com.curvedbottomnavigationbar.CurvedBottomNavigationBarPackage;
// lottie-react-native
import com.airbnb.android.react.lottie.LottiePackage;
// react-native-code-push
import com.microsoft.codepush.react.CodePush;
// react-native-config
import com.lugg.RNCConfig.RNCConfigPackage;
// react-native-curved-bottom-bar
import com.curvedbottombar.CurvedBottomBarPackage;
// react-native-device-info
import com.learnium.RNDeviceInfo.RNDeviceInfo;
// react-native-fast-image
import com.dylanvann.fastimage.FastImageViewPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
// react-native-image-crop-picker
import com.reactnative.ivpusic.imagepicker.PickerPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-push-notification
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreenReactPackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// react-native-video
import com.brentvatne.react.ReactVideoPackage;
// react-native-webview
import com.reactnativecommunity.webview.RNCWebViewPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new AppleAuthenticationAndroidPackage(),
      new AsyncStoragePackage(),
      new ClipboardPackage(),
      new ARTPackage(),
      new RNDateTimePickerPackage(),
      new NetInfoPackage(),
      new ReactNativeFirebaseAppPackage(),
      new ReactNativeFirebaseAuthPackage(),
      new ReactNativeFirebaseDatabasePackage(),
      new ReactNativeFirebaseMessagingPackage(),
      new RNGoogleSigninPackage(),
      new AppCenterReactNativePackage(getApplication()),
      new AppCenterReactNativeAnalyticsPackage(getApplication(), getResources().getString(com.vina.farm.R.string.appCenterAnalytics_whenToEnableAnalytics)),
      new AppCenterReactNativeCrashesPackage(getApplication(), getResources().getString(com.vina.farm.R.string.appCenterCrashes_whenToSendCrashes)),
      new CurvedBottomNavigationBarPackage(),
      new LottiePackage(),
      new CodePush(getResources().getString(com.vina.farm.R.string.CodePushDeploymentKey), getApplicationContext(), com.vina.farm.BuildConfig.DEBUG),
      new RNCConfigPackage(),
      new CurvedBottomBarPackage(),
      new RNDeviceInfo(),
      new FastImageViewPackage(),
      new RNGestureHandlerPackage(),
      new PickerPackage(),
      new LinearGradientPackage(),
      new ReactNativePushNotificationPackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new SplashScreenReactPackage(),
      new SvgPackage(),
      new VectorIconsPackage(),
      new ReactVideoPackage(),
      new RNCWebViewPackage()
    ));
  }
}
