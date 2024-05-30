import React from 'react'
import ReactDOM from 'react-dom/client'
import TagManager from 'react-gtm-module'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import clevertap from 'clevertap-web-sdk'
clevertap.privacy.push({ optOut: false }) // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }) // Set the flag to true, if the user agrees to share their IP data
// clevertap.spa = true
clevertap.init('TEST-Z8R-KK4-876Z', 'sg1') // Replace with values applicable to you. Refer below
clevertap.setLogLevel(3)

clevertap.notifications.push({
    serviceWorkerPath: './service-worker.js',
    vapidKey:
        'AAAAj0ZzWUk:APA91bFl2N8wszbI9ZhpY7poZ7HMUpax3eQ5WJOKHOWebaRXw6mwhl5H6-BSQu7sE8t9OsijhrIbKNopbsyVfRYZKlw8OPfcDyK2PXCF0vlEPZDpIvx4ZMwGqzaVtkNsZ7BeSFs0tMiF',
})
// Initialize CleverTap
clevertap.notifications.push({
    titleText: 'Would you like to receive Push Notifications?',
    bodyText:
        'We promise to only send you relevant content and give you updates on your activities.',
    okButtonText: 'Yes',
    rejectButtonText: 'No',
    askAgainTimeInSeconds: 5, // Time to ask again if rejected
})

// Request notification permissions (this handles prompting the user)
clevertap.notifications.push({
    onSuccess: function (result) {
        console.log('CleverTap Notification Permission result: ', result)
    },
    onFailure: function (error) {
        console.log('CleverTap Notification Permission error: ', error)
    },
})

const tagManagerArgs = {
    gtmId: 'GTM-K79HF867',
    auth: 'W1M5jYd6-mA03DuobURe9Q&gtm_preview=env-1',
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
