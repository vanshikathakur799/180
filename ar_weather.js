let coordinates = {}

$(document).ready(function(){
    get_coordinates()
    get_weather()
})

function get_weather(){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=5c433d54a165823a84b2eb5caa800ba1`,
        type: 'get',
        success: function(response){
            let name = response.name
            let weather = response.weather[0].main
            $('#scene_container').append(
               ` <a-entity gps-entity-place = "latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]}">
                    <a-entity>
                        <a-text height = '50' vlaue = 'Weather forecast is ${weather} at ${name}'></a-text>
                    </a-entity>
                </a-entity>`
            )
        }
    })
}

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    } else {
        alert("Coordinates not selected!")
        window.history.back()
    }
}
