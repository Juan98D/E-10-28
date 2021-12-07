import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


const data = [
  {
    src: 'https://i.ytimg.com/vi/x000E3ziMhs/maxresdefault.jpg',
    title: 'Que es el metaverso y que ofrece',
    channel: 'XAKATA.COM',
    views: '396 k views',
    createdAt: 'a week ago',
    link:"https://www.xataka.com/basics/que-metaverso-que-posibilidades-ofrece-cuando-sera-real",
  },
  {
    src: 'https://murciadiario.com/upload/images/09_2021/7650_210915hotmart.png',
    title: 'Lo que no sabias de hotmart',
    channel: 'HOTMART.COM',
    views: '40 M views',
    createdAt: '3 years ago',
    link: "https://blog.hotmart.com/es/lo-que-no-sabias-de-hotmart/",
  },
  {
    src: 'https://www.misiontic2022.gov.co/746/articles-194448_foto_marquesina.jpg',
    title: 'Maraton Por el talento',
    channel: 'MISIONTIC.COM',
    views: '130 M views',
    createdAt: '10 months ago',
    link: "https://www.misiontic2022.gov.co/portal/Secciones/Noticias/194448:Maraton-por-el-Talento-TI-el-espacio-donde-las-empresas-podran-contratar-los-perfiles-tecnologicos-que-necesitan",
  },
];

function Blog(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                <a href= { item.link} target="_blank" rel="noreferrer">{item.title}</a>
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Blog.propTypes = {
  loading: PropTypes.bool,
};

export default Blog;