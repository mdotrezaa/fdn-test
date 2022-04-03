import logo from "./logo.svg";
import "./assets/css/main.css";
import Nav from "./components/nav";
import Ads from "./components/elements/ads";
import Text from "./components/elements/text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEditors } from "./redux/actions/editorActions";
import { getAllArticle } from "./redux/actions/articleActions";

function App() {
  const dispatch = useDispatch();
  const editorList = useSelector((state) => state.editors);
  const { editors } = editorList;
  const artileList = useSelector((state) => state.articles);
  const { articles } = artileList;

  useEffect(() => {
    dispatch(getAllEditors());
    dispatch(getAllArticle());
  }, [dispatch]);
  return (
    <div className="App">
      <Nav />
      <Ads title="Top Frame" width="970" height="50" />
      <Ads title="Billboard" width="970" height="250" />
      <div className="wrap">
        <Text headingLevel="h2" type="title">
          Editor's Choice
        </Text>
        <Text headingLevel="span" type="subtitle">
          Curated with love
        </Text>
        <div className="section-card">
          {editors
            ? editors.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-top">
                    <img
                      className="profile"
                      src={require(`./assets/images/profile${index + 1}.jpg`)}
                    />
                    <div className="username">
                      <Text headingLevel="h5" type="title">
                        {item.editor}
                      </Text>
                      <Text headingLevel="span" type="subtitle" size="small">
                        {item.role}
                      </Text>
                    </div>
                  </div>
                  <div className="card-body">
                    <img
                      className="card-thumbnail"
                      src={require(`./assets/images/${index + 1}.jpg`)}
                    />
                    <div className="review-card">
                      <Text headingLevel="span" type="title" size="small">
                        {item.product.rating}
                      </Text>
                      {[...new Array(5)].map((arr, index) => {
                        return index < parseInt(item.product.rating) ? (
                          <i
                            className="bx bxs-star"
                            style={{ color: "#DB234C" }}
                          ></i>
                        ) : (
                          <i
                            className="bx bxs-star"
                            style={{ color: "#D8D8D8" }}
                          ></i>
                        );
                      })}
                      {/* <div className="rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div> */}
                      <Text headingLevel="span" type="title" size="small">
                        (7)
                      </Text>
                    </div>
                    <div className="title-block">
                      <Text headingLevel="h4" type="title">
                        {item.product.name}
                      </Text>
                      <Text headingLevel="span">
                        {item.product.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="full-section section-bg">
        <div className="wrap">
          <div className="grid two-column">
            <div className="left-column">
              <Text headingLevel="h3">
                Looking for products that are just simply perfect for you?
              </Text>
              <Text headingLevel="p">
                Here are some products that ew believe match your skin, hair,
                and body! Have we mentioned that they solve your concern too?
              </Text>
            </div>
            <div className="right-column flex">
              {editors
                ? editors.slice(0, 3).map((item, index) => (
                    <div key={index} className="card">
                      <div className="card-top">
                        <img
                          className="profile"
                          src={require(`./assets/images/profile${
                            index + 1
                          }.jpg`)}
                        />
                        <div className="username">
                          <Text headingLevel="h5" type="title">
                            {item.editor}
                          </Text>
                          <Text
                            headingLevel="span"
                            type="subtitle"
                            size="small"
                          >
                            {item.role}
                          </Text>
                        </div>
                      </div>
                      <div className="card-body">
                        <img
                          className="card-thumbnail"
                          src={require(`./assets/images/${index + 1}.jpg`)}
                        />
                        <div className="review-card">
                          <Text headingLevel="span" type="title" size="small">
                            {item.product.rating}
                          </Text>
                          {[...new Array(5)].map((arr, index) => {
                            return index < parseInt(item.product.rating) ? (
                              <i
                                className="bx bxs-star"
                                style={{ color: "#DB234C" }}
                              ></i>
                            ) : (
                              <i
                                className="bx bxs-star"
                                style={{ color: "#D8D8D8" }}
                              ></i>
                            );
                          })}
                          {/* <div className="rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div> */}
                          <Text headingLevel="span" type="title" size="small">
                            (7)
                          </Text>
                        </div>
                        <div className="title-block">
                          <Text headingLevel="h4" type="title">
                            {item.product.name}
                          </Text>
                          <Text headingLevel="span">
                            {item.product.description}
                          </Text>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
