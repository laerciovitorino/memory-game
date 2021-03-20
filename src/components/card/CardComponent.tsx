import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"

interface CardProps {
    imagePath?: string;
    name?: string;
}

const CardComponent: React.FC<CardProps> = ({ imagePath, name }) => {
    return (
        <Card>
            <CardMedia>
                <img style={{ width: 'fit-content', height: '25vh', maxWidth: '16.5vw' }} src={imagePath} />
            </CardMedia>
            <CardContent>
                <Typography style={{ textAlign: 'center' }}>{name}</Typography>
            </CardContent>
        </Card>
    );
}

export { CardComponent };