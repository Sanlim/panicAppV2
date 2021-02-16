import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
};

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>ข้าม</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>ถัดไป</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>เสร็จ</Text>
    </TouchableOpacity>
);

const PreviewScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("GeneralUser")}
            onDone={() => navigation.navigate("GeneralUser")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image}
                        source={require('../assets/preview.png')}
                    />,
                    title: 'Panic Disorder Patient App',
                    subtitle: 'แอปพลิเคชันช่วยผู้ป่วยโรคแพนิค',
                },
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image}
                        source={require('../assets/check.png')}
                    />,
                    title: 'ระบบบันทึกอาการ',
                    subtitle: 'ระบุอาการ เวลา ความรุนแรง',
                },
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image}
                        source={require('../assets/clock.png')}
                    />,
                    title: 'ระบบเตือน',
                    subtitle: 'เราจะช่วยเตือนคุณในการทานยาและนัดพบแพทย์',
                },
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image}
                        source={require('../assets/music.png')}
                    />,
                    title: 'ระบบแนะนำการผ่อนคลาย',
                    subtitle: 'หากคุณต้องการผ่อนคลายความกังวลมองหาเราสิ!',
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        //flex: 1,
        width: 450,
        height: 300
    },
});

export default PreviewScreen;