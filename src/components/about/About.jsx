
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Hi Mohan</Typography>
                <Typography variant="h5" className={classes.text}>

                    {/* I'm a Software Engineer based in India. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here */}

                    Goal-oriented full stack developer with a passion for working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. My core competency lies in developing applications from its inception. I primarily work with MERN stack among the full stack technologies. As a full stack developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to revolutionize the project I work on.

                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/mohaperu" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to 
                    or send me an Email
                    <Link href="mailto:mohaperu@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;