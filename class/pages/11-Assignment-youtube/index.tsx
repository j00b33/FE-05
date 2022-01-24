import ReactPlayer from 'react-player'

export default function LibraryAYoutubePage(){
    
    return (
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=IWBHlLzz5oo" 
        width={800}
        height={600}
    playing
    muted
    config={{ file: { attributes: {
    autoPlay: true,
    muted: true
    }}}}
        />
    )
}
//Ideally we should apply autoPlay and muted automatically if the playing and muted props are set.