const React = require('react')
class Index extends React.Component{
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1>See All the Pokemon</h1>
            </div>
        )
    }
}

module.exports = Index