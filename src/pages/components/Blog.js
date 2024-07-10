import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StyledButton from "./StyledButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAX_TITLE_LINES = 2;
const MAX_TITLE_CHARS = 25;
const MAX_DESCRIPTION_LINES = 2;
const MAX_DESCRIPTION_CHARS = 37;

function truncateText(text, maxLines, maxChars) {
  if (!text) return "";
  let formattedText = text.replace(/(\r\n|\n|\r)/gm, " ").trim();
  if (formattedText.length > maxLines * maxChars) {
    formattedText = formattedText.substring(0, maxLines * maxChars);
    formattedText = formattedText.substring(
      0,
      Math.min(formattedText.length, formattedText.lastIndexOf(" "))
    );
    formattedText += "...";
  }
  return formattedText;
}

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid
      container
      id="blog"
      pt={5}
      pb={3}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{ color: "var(--main-color)", fontWeight: "500", textAlign: "center" }}
          mb={2}
        >
          Últimas do <span className="third">Blog</span>
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Slider {...settings}>
          {posts.map((post, index) => (
            <Grid key={index} item>
              <Card
                sx={{
                  width: "82%",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  padding: 2,
                  margin: 2,
                  borderRadius: 3,
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={post.yoast_head_json.og_image[0].url}
                  title={post.yoast_head_json.title}
                />
                <CardContent sx={{ paddingX: 0 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {truncateText(
                      post.yoast_head_json.title,
                      MAX_TITLE_LINES,
                      MAX_TITLE_CHARS
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {truncateText(
                      post.yoast_head_json.description,
                      MAX_DESCRIPTION_LINES,
                      MAX_DESCRIPTION_CHARS
                    )}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    className="readMore"
                  >
                    Leia mais
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Slider>
        <Grid item textAlign="center" mt={5}>
          <StyledButton
            href="https://www.olivas.digital/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="button-theme"
          >
            Veja mais
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Blog;
