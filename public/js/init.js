function fetchAndSaveData() {
    try {
        // Check if the local data is outdated or needs to be refreshed
        const localDataTimestamp = localforage.getItem('myDataTimestamp');
        const timeSt = localDataTimestamp == null ? '' : localDataTimestamp;
        $.ajax({
            url: 'https://condoy.com/api/mapdata/v3/getResult',
            type: 'GET',
            data: { version: timeSt },
            dataType: 'json',
            success: function (data) {
                if (data.status) {
                    localforage.setItem('myDataTimestamp', data.version);
                    localforage.setItem("mapInfo", { 'info': data.data });
                    localforage.setItem("data_reserve", { 'info': data.data });
                } else {
                    console.log('no need to save');
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error('Request failed with status:', textStatus);
            }
        });
    } catch (error) {
        console.error('Error during AJAX request', error);
    }
}

async function getItem() {
    try {
        const data = await localforage.getItem('mapInfo');
        return data;
    } catch (error) {
        console.error('error finding data', error);
    }
}
