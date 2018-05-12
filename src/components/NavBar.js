
class BuyBook extends React.Component{
render(){
  return (
    <ul id="menu">
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">About ￬</a>
        <ul className="hidden">
        <li><a href="#">Who We Are</a></li>
        <li><a href="#">What We Do</a></li>
      </ul>
      </li>
      <li>
      <a href="#">Portfolio ￬</a>
      <ul className="hidden">
        <li><a href="#">Photography</a></li>
        <li><a href="#">Web & User Interface Design</a></li>
        <li><a href="#">Illustration</a></li>
      </ul>
      </li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchList: (text) => dispatch(fetchList(text)),
  searchText: (text) => dispatch(searchText(text)),
});

export default connect(undefined, mapDispatchToProps)(Header);
