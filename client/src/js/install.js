const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { 
    window.deferredPrompt = event;
    // remove the hidden class and show the install button
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Button clicked check :)');

    const promptEvent = window.deferredPrompt;
    if (! promptEvent) {
        return;
    }
    // show the install prompt
    console.log(promptEvent);
    promptEvent.prompt();


    window.deferredPrompt = null;
    // remove the install button by adding hidden class
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    // console log to confirm app was installed
    console.log('App installed successfully.');
    window.deferredPrompt = null;
});