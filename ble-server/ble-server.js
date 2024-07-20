const noble = require('noble');

noble.on('stateChange', state => {
    if (state === 'poweredOn') {
        console.log('Bluetoothが有効になりました');

        noble.startScanning([], {});

        noble.on('discover', peripheral => {
            console.log('デバイスを発見しました:', peripheral.address);

            peripheral.connect().then(() => {
                console.log('デバイスに接続しました:', peripheral.address);

                // データの送受信処理
                // ...
            });
        });
    } else {
        console.log('Bluetoothが無効になっています');
    }
});