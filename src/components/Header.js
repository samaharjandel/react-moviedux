import React from 'react';
import { useDecision } from '@optimizely/react-sdk';
import '../styles.css';

// Evaluate the flag for APP Test
const MyComponent = function() {
    const [decision] = useDecision('app_test', {
        variables: ['watch_again', 'custom_genre', 'welcome_message','nav_button_colour']
    });
    //debugger;
    //const customGenre = decision?.variables?.custom_genre ?? false;
   // const boolWatchAgain = decision?.variables?.watch_again ?? false;
    const welcomeMessage = decision?.variables?.welcome_message ?? 'Welcome';
   // const navButtonColour = decision?.variables?.nav_button_colour ?? 'Welcome';
    
    return (
        <div>
            
                <div>
                    <h1>{welcomeMessage}</h1>
                    {/* <p>Decision enabled: {String(decision?.enabled ?? 'unknown')}</p>
                    <p>Custom Genre variable: {String(customGenre)}</p>
                    <p>Watch Again variable: {String(boolWatchAgain)}</p>
                    <p>Welcome Message: {welcomeMessage}</p>
                    <p>navButtonColour: {navButtonColour}</p> */}
                    {/* <p>Raw decision: {JSON.stringify(decision, null, 2)}</p> */}
                </div>
           
        </div>
    );
};

export default function Header(){
    return (
        <div className='header'>
            {/* <img className='logo' src='logo.png' alt="moviedux" /> */}
            <h2 className='app-subtitle'>
                <MyComponent />
            </h2>
        </div>
    );
}