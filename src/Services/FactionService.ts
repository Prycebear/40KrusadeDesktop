import { HttpService } from './HttpService';
import { Faction } from '../Interfaces/FactionObjects';

const factionService = new HttpService<Faction>('faction');


export default factionService;
