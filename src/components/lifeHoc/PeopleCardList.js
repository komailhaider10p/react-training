import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class PeopleCardList extends React.PureComponent {
    createCards = () => {
        const dataCardsCount = this.props.data ? this.props.data.length : 0;
        const styles = {
            card: {
              maxWidth: 345,
            },
            media: {
              height: 140,
            }
        };
        let cards = [];
        for (var i = 0; i < dataCardsCount; i++) {
            cards.push(
                <Card key={this.props.data[i].login.username} style={styles.card}>
                    <CardActionArea>
                        <CardMedia
                        style={styles.media}
                        image={this.props.data[i].picture.large}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.data[i].name.first} {this.props.data[i].name.last}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            )
        }
        return cards;
    }
    render() {
        return (
            <React.Fragment>
                {this.createCards()}
            </React.Fragment>
        )
    }
}
