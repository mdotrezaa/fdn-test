import Text from "./elements/text";

function Card(props) {
  return (
    <>
      {props.type == "editor" ? (
        props.data.map((item, index) => (
          <div key={index} className={`card ${props.className}`}>
            <div className='card-top'>
              <img
                className='profile'
                src={require(`../assets/images/profile${index + 1}.jpg`)}
              />
              <div className='username'>
                <Text headingLevel='h5' type='heading'>
                  {item.editor}
                </Text>
                <Text headingLevel='span' type='subtitle' size='small'>
                  {item.role}
                </Text>
              </div>
            </div>
            <div className='card-body'>
              <img
                className='card-thumbnail'
                src={require(`../assets/images/${index + 1}.jpg`)}
              />
              <div className='review-card'>
                <Text headingLevel='span' type='title' size='small'>
                  {item.product.rating}
                </Text>
                {[...new Array(5)].map((arr, index) => {
                  return index < parseInt(item.product.rating) ? (
                    <i className='bx bxs-star' style={{ color: "#DB234C" }}></i>
                  ) : (
                    <i className='bx bxs-star' style={{ color: "#D8D8D8" }}></i>
                  );
                })}
                <Text headingLevel='span' type='title' size='small'>
                  (7)
                </Text>
              </div>
              <div className='title-block'>
                <Text headingLevel='h4' type='title'>
                  {item.product.name}
                </Text>
                <Text headingLevel='span'>{item.product.description}</Text>
              </div>
            </div>
          </div>
        ))
      ) : props.type == "review" ? (
        props.data.map((item, index) => (
          <div key={index} className={`card ${props.className}`}>
            <div className='card-body'>
              <div className='card-description'>
                <img className='card-thumbnail' src={item.product.image} />
                <div className='card-title'>
                  <Text headingLevel='h4' type='title'>
                    {item.product.name}
                  </Text>
                  <Text headingLevel='span'>{item.product.desc}</Text>
                </div>
              </div>
              <hr />
              <div className='review-card'>
                {[...new Array(5)].map((arr, index) => {
                  return index < parseInt(item.star) ? (
                    <i className='bx bxs-star' style={{ color: "#DB234C" }}></i>
                  ) : (
                    <i className='bx bxs-star' style={{ color: "#D8D8D8" }}></i>
                  );
                })}
              </div>
              <Text headingLevel='p' size='small'>
                {item.comment}
              </Text>
            </div>
            <div className='card-bottom'>
              <img
                className='profile'
                src={require(`../assets/images/profile${index + 1}.jpg`)}
              />
              <div className='username'>
                <Text headingLevel='h5' type='heading'>
                  {item.user}
                </Text>
                <Text headingLevel='span' type='subtitle' size='small'>
                  {item.role}
                </Text>
                <Text headingLevel='span' type='subtitle' size='small'>
                  {item.profile.map((item) => item).join(", ")}
                </Text>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={`card ${props.className}`}>{props.children}</div>
      )}
    </>
  );
}
export default Card;
