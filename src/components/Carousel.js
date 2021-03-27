import React from 'react'


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'AirDok',
                    subtitle: 'Fly far, stay cheap',
                    imgSrc: '',
                    link: 'https://linkedin.com/in/isaac-posey',
                    selected: 'false'
                },
                {
                    id: 1,
                    title: 'Vinylfy',
                    subtitle: 'Buy and sell your favorite Vinyl!',
                    imgSrc: '',
                    link: 'https://github.com/ihposey12',
                    selected: 'false'
                },
                {
                    id: 2,
                    title: 'QuoteTake',
                    subtitle: 'Jot down your favorite quotes!',
                    imgSrc: '',
                    link: 'https://linkedin.com/in/isaac-posey',
                    selected: 'false'
                }
            ]
        }
    }
    render() {
        return(
            <p>Carousel Works!</p>
        )
    }
}

export default Carousel