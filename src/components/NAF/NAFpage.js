import { Information } from './Information';
import { NAFbuttons } from './NAFbuttons';
import { NAFfooter } from './NAFfooter';
import { NAFheader } from './NAFheader';
import './NAFschedule';
import { NAFschedule } from './NAFschedule';
import BarraPrincipal from '../../BarraPrincipal';


export default function NAFpage() {
    return(
        <div>
            <BarraPrincipal/>
            <NAFheader />
            <Information />
            <NAFbuttons />
            <NAFschedule />
            <NAFfooter />
        </div>
        

    );
}