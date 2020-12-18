import React, { useState } from 'react';
import { View, TextInput, Picker} from 'react-native';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { Text } from '../../components/Text/index';
import PushNotification from "react-native-push-notification";
import { LogBox } from 'react-native';

const Contact = () => {
  LogBox.ignoreAllLogs();
  const [msg, setMsg] = useState();
  const [selectedValue, setSelectedValue] = useState("java");
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
      bigText: 'Mensagem enviada', // (optional) default: "message" prop
      color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      invokeApp: false,
      // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: 1000, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      /* iOS and Android properties */
      message: 'Mensagem enviada', // (required)
      userInfo: { screen: 'home' }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }
  return (
    <Container>
      <View style={{ justifyContent: 'center', flex: 0.9 }}>
        <Text style={{ color: 'white', fontSize: 14 }}>Selecione o plano</Text>
        <Picker
          selectedValue={selectedValue}
          itemStyle={{ color: 'white', backgroundColor: 'white' }}
          place
          style={{ height: 50, width: 250, color: 'white', marginBottom : 30 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="24 fotos - 150 reais" value="java" />
          <Picker.Item label="30 fotos - 180 reais" value="js" />
        </Picker>
        <Text style={{color: 'white', fontSize: 14}}>Mensagem</Text>
        <TextInput 
          value={msg}
          style={{color:'white'}}
          onChangeText={(txt) => setMsg(txt)}
          placeholder='Digite sua mensagem'
          placeholderTextColor='white'
        />
      </View>
      <Button
        modifiers="commonButton"
        onPress={() => localNotif()}
      >
        <Text modifiers="buttonText">Enviar</Text>
      </Button>
    </Container>
  )
}

export default Contact;