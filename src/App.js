import logo from "./logo.svg";
import "./assets/css/main.css";
import Nav from "./components/nav";
import Ads from "./components/elements/ads";
import Text from "./components/elements/text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEditors } from "./redux/actions/editorActions";
import { getAllArticle } from "./redux/actions/articleActions";
import { getAllReview } from "./redux/actions/reviewActions";
import Card from "./components/card";
import Button from "./components/elements/button";

function App() {
  const dispatch = useDispatch();
  const editorList = useSelector((state) => state.editors);
  const { editors } = editorList;
  const artileList = useSelector((state) => state.articles);
  const { articles } = artileList;
  const reviewList = useSelector((state) => state.reviews);
  const { reviews } = reviewList;

  const leftArrow = () => {
    document.getElementById("slider").scrollLeft -= 300;
  };

  const rightArrow = () => {
    document.getElementById("slider").scrollLeft += 300;
  };
  const left = () => {
    document.getElementById("product").scrollLeft -= 300;
  };
  const right = () => {
    document.getElementById("product").scrollLeft += 300;
  };
  useEffect(() => {
    dispatch(getAllEditors());
    dispatch(getAllArticle());
    dispatch(getAllReview());
  }, [dispatch]);
  return (
    <div className='App'>
      <Nav />
      <Ads title='Top Frame' width='970' height='50' />
      <Ads title='Billboard' width='970' height='250' />
      <div className='wrap'>
        <Text headingLevel='h2' type='heading'>
          Editor's Choice
        </Text>
        <Text headingLevel='span' type='subtitle'>
          Curated with love
        </Text>
        <div className='section-card'>
          {editors ? <Card type='editor' data={editors} /> : ""}
        </div>
      </div>
      <div className='full-section section-bg'>
        <div className='wrap'>
          <div className='grid column-right'>
            <div className='left-column'>
              <Text headingLevel='h2'>
                Looking for products that are just simply perfect for you?
              </Text>
              <Text headingLevel='p'>
                Here are some products that ew believe match your skin, hair,
                and body! Have we mentioned that they solve your concern too?
              </Text>
              <Button variant='primary' position='right'>
                See my Matches
              </Button>
            </div>
            <div className='right-column flex'>
              {[...new Array(3)].map((el, index) => (
                <Card type='product'>
                  <div className='card-body'>
                    <img
                      className='card-thumbnail'
                      src={require(`./assets/images/${index + 1}.jpg`)}
                    />
                    <Text headingLevel='span' type='heading' color='primary'>
                      Match skin type
                    </Text>
                    <div className='review-card'>
                      <Text headingLevel='span' type='title' size='small'>
                        4.9
                      </Text>
                      {[...new Array(5)].map((arr, index) => {
                        return index < parseInt(4.9) ? (
                          <i
                            className='bx bxs-star'
                            style={{ color: "#DB234C" }}></i>
                        ) : (
                          <i
                            className='bx bxs-star'
                            style={{ color: "#D8D8D8" }}></i>
                        );
                      })}
                      <Text headingLevel='span' type='title' size='small'>
                        (7)
                      </Text>
                    </div>
                    <div className='title-block'>
                      <Text headingLevel='h4' type='title'>
                        VAL by Valerie Thomas
                      </Text>
                      {index == 1 ? (
                        <Text headingLevel='span'>
                          Phito Pigmen Liquid Serum Foundation
                        </Text>
                      ) : (
                        <Text headingLevel='span'>Pure Pressed blush</Text>
                      )}

                      <Text headingLevel='span' type='subtitle'>
                        Neutral Rose
                      </Text>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Ads title='Horizontal' type='internal' width='970' height='250' />
      <div className='wrap'>
        <Text headingLevel='h2' type='heading'>
          Latest Article
        </Text>
        <Text headingLevel='span' type='subtitle'>
          so you can make better purchase decision
        </Text>
        <div className='grid three-column'>
          {articles
            ? articles.map((item, index) => (
                <div className='article' key={index}>
                  <div className='article-top'>
                    <img
                      className='thumbnail'
                      style={{ width: "100%" }}
                      src={item.image}
                    />
                    {index > 3 ? (
                      <Text headingLevel='span' color='primary'>
                        Sponsored
                      </Text>
                    ) : (
                      ""
                    )}
                  </div>
                  <Text headingLevel='h4' type='title'>
                    {item.title}
                  </Text>
                  <div className='flex'>
                    <Text headingLevel='span' type='heading' size='small'>
                      {item.author}
                    </Text>

                    <Text headingLevel='span' type='subtitle' size='small'>
                      {"|  " + item.published_at}
                    </Text>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className='wrap'>
        <div className='grid two-column review'>
          <div className='left-column'>
            <div
              className='title-block flex space-between'
              style={{ marginBottom: "50px" }}>
              <div className=''>
                <Text headingLevel='h2' type='heading'>
                  Latest Review
                </Text>
                <Text headingLevel='span' type='subtitle'>
                  so you can make better purchase decision
                </Text>
              </div>
              <Button variant='clear'>
                See More <i class='bx bx-chevron-right'></i>
              </Button>
            </div>
            <div id='slider' className='slider-block'>
              {reviews ? <Card type='review' data={reviews} /> : ""}
            </div>
            <div className='flex center'>
              <div className='btn' onClick={() => leftArrow()}>
                <i
                  class='bx bx-chevron-left bx-md'
                  style={{ color: "#DB234C" }}></i>
              </div>
              <div className='btn' onClick={() => rightArrow()}>
                <i
                  class='bx bx-chevron-right bx-md'
                  style={{ color: "#DB234C" }}></i>
              </div>
            </div>
          </div>
          <div className='right-column'>
            <Ads title='MR2' width='300' height='250' />
          </div>
        </div>
      </div>
      <div className='wrap'>
        <div className='flex space-between'>
          <div className=''>
            <Text headingLevel='h2' type='heading'>
              Popular Groups
            </Text>
            <Text headingLevel='span' type='subtitle'>
              where the beauty Talk Are
            </Text>
          </div>
          <Button variant='clear'>
            See More <i class='bx bx-chevron-right'></i>
          </Button>
        </div>
        <div className='grid four-column center'>
          {[...Array(4)].map((val, index) => (
            <Card className='padding30 card-shadow'>
              <div className='card-body'>
                <div className='thumbnail'>
                  <img src={require(`./assets/images/group${index + 1}.png`)} />
                </div>
                <Text headingLevel='h4' type='heading'>
                  Embrace the curl
                </Text>
                <div className='icon-block flex center'>
                  <span>
                    {" "}
                    <i class='bx bx-female'></i>
                    <i class='bx bx-chevron-down'></i>
                  </span>
                  <span>
                    {" "}
                    <i class='bx bx-list-ul'></i>
                    <i class='bx bx-chevron-down'></i>
                  </span>
                  <span>
                    {" "}
                    <i class='bx bx-message-rounded-dots'></i>
                    <i class='bx bx-chevron-down'></i>
                  </span>
                </div>
                <Text headingLevel='h5' type='heading'>
                  May our curls pop and never stop!
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className='wrap'>
        <div className='flex space-between'>
          <div className=''>
            <Text headingLevel='h2' type='heading'>
              Latest Videos
            </Text>
            <Text headingLevel='span' type='subtitle'>
              watch and learn, ladies
            </Text>
          </div>
          <Button variant='clear'>
            See More <i class='bx bx-chevron-right'></i>
          </Button>
        </div>
        <div className='grid three-column'>
          <img className='item1' src={logo} />
          <img className='item2' src={logo} />
          <img className='item31' src={logo} />
        </div>
      </div>
      <div className='wrap'>
        <div className='flex space-between'>
          <div className=''>
            <Text headingLevel='h2' type='heading'>
              Tranding this week
            </Text>
            <Text headingLevel='span' type='subtitle'>
              see our weekly most reviewed products
            </Text>
          </div>
        </div>
        <div id='product' className='slider-block-item margin-t30'>
          {[...new Array(8)].map((el, index) => (
            <Card type='product'>
              <div className='card-body'>
                <img src={require(`./assets/images/1.jpg`)} />
                <div className='review-card'>
                  <Text headingLevel='span' type='title' size='small'>
                    4.9
                  </Text>
                  {[...new Array(5)].map((arr, index) => {
                    return index < parseInt(4.9) ? (
                      <i
                        className='bx bxs-star'
                        style={{ color: "#DB234C" }}></i>
                    ) : (
                      <i
                        className='bx bxs-star'
                        style={{ color: "#D8D8D8" }}></i>
                    );
                  })}
                  <Text headingLevel='span' type='title' size='small'>
                    (7)
                  </Text>
                </div>
                <div className='title-block'>
                  <Text headingLevel='h4' type='title'>
                    VAL by Valerie Thomas
                  </Text>
                  {index == 1 ? (
                    <Text headingLevel='span'>
                      Phito Pigmen Liquid Serum Foundation
                    </Text>
                  ) : (
                    <Text headingLevel='span'>Pure Pressed blush</Text>
                  )}

                  <Text headingLevel='span' type='subtitle'>
                    Neutral Rose
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className='flex center'>
          <div className='btn' onClick={() => left()}>
            <i
              class='bx bx-chevron-left bx-md'
              style={{ color: "#DB234C" }}></i>
          </div>
          <div className='btn' onClick={() => right()}>
            <i
              class='bx bx-chevron-right bx-md'
              style={{ color: "#DB234C" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
