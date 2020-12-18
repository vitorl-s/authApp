import React from 'react';
import { View } from 'react-native';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { Text } from '../../components/Text/index';
import { Logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import PushNotification from "react-native-push-notification";

const Home = () => {
  const localNotif = () => {
    PushNotification.requestPermissions();
    PushNotification.createChannel(
      {
        channelId: "default-channel-id", // (required)
        channelName: `Default channel`, // (required)
        channelDescription: "A default channel", // (optional) default: undefined.
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
    );
    PushNotification.foreground = true;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      invokeApp: true,
      // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: 1000, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS and Android properties */
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }
  const dispatch = useDispatch();
  const handleLogoutButton = () => {
    dispatch(Logout());
  };
  return(
    <Container modifiers="around">
      <Text modifiers="title">Bem-vindo! Você está logado</Text>
      <View>
        <Button
          modifiers="commonButton"
          onPress={() => localNotif()}
        >
          <Text modifiers="buttonText">Disparar notification</Text>
        </Button>
        <Button
          modifiers="commonButton"
          onPress={() => handleLogoutButton()}
        >
          <Text modifiers="buttonText">Logout</Text>
        </Button>
      </View>
    </Container>
  );
}

export default Home;