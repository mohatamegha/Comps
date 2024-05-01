import Button from '../components/Button';
import { GoBell, GoAlert, GoHeart } from "react-icons/go";

function ButtonPage () {
    return (
        <div> 
            <div>
                <Button primary rounded>
                    <GoBell className='mr-1'/>
                    hello
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoAlert className='mr-1'/>
                    hello
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoHeart className='mr-1 mt-1.5'/>
                    wasssup
                </Button>
            </div>
            <div>
                <Button success>
                    you okay?
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoHeart className='mr-1'/>
                    Bye
                </Button>
            </div>
        </div>
    );
}
export default ButtonPage;