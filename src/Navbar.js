import { Person, EmailOutlined, ArrowBack, VpnKey, EmailSharp } from '@material-ui/icons/';

//navbar component
const Navbar = () => {
 return (
  <>
   <div className="container navbar py-3 bg-">
    <span className="font-monospace"><strong>TED_STORIES</strong></span>
    <button className="btn btn-dark text-light rounded-0 px-3 font-monospace"><Person style={{ marginTop: "-4px" }} /> SIGNIN &nbsp;</button>
   </div>
  </>
 )
}
export default Navbar;