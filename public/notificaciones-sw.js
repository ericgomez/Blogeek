importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js')

// Init Firebase nuevamente
firebase.initializeApp({
    projectId: "blogeek-87a99",
    messagingSenderId: "956898710949"
})

const messaging =firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
    const tituloNotificacion = "Ya tenemos un nievo post"
    const opcionesNotificacion = {
        body: payload.data.titulo,
        icon: 'icons/icon_new_post.png',
        click_action: "blogeek-87a99.firebaseapp.com"
    }

    return self.registration.showNotificacion(
        tituloNotificacion,
        opcionesNotificacion
    )
})

