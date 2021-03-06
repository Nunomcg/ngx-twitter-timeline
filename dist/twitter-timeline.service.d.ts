import { Observable } from 'rxjs';
export declare class TwitterTimelineService {
    private TWITTER_SCRIPT_ID;
    private TWITTER_WIDGET_URL;
    constructor();
    loadScript(): Observable<any>;
    private startScriptLoad();
}
