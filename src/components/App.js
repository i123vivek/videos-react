import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const KEY = 'AIzaSyDRV6Ob-C2O9150UXTN_y5SNVPTVkvxNpM';


class App extends React.Component{

    state =  { videos: [], selectedVideo: null };


    componentDidMount(){
        this.onTermSubmit('building');
    }

    onTermSubmit = async (term) =>{
        //console.log("search term is:", term);

        const response =  await youtube.get('/search',{
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        })


        //console.log("response on search is: ", response.data.items);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }

    render(){
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit= {this.onTermSubmit} />
                {/* I have {this.state.videos.length} videos. */}

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                        
                    </div>
                </div>

                

            </div>
        )
    }
}

export default App;