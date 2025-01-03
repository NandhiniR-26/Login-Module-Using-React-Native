import React, { useState } from 'react';
import { View, Text, TextInput,Button } from 'react-native';
import { signup } from './api';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await signup(username, email, password);
            alert(response.message);
        } catch (error) {
            alert('Signup failed');
        }
    };

    return (
        <View>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={setUsername} />
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

export default SignupScreen;

