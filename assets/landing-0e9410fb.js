import {G as s, $ as e, c as l, T as u} from "./DarkTheme-2fd54461.js";
import {S as f} from "./Sponsor-b3b14c28.js";
import "./main-a6347118.js";
const o = {
    sponsor: new f
};
o.initialize = function(g) {
    const d = this;
    s.active_tab != "landing" && (s.active_tab = "landing"),
    e("#content").load("./tabs/landing.html", ()=>{
        function c(t) {
            n = e(".languageSwitcher"),
            n.find("a").each(function(i) {
                const a = e(this)
                  , r = a.attr("lang");
                t == r ? (a.removeClass("selected_language"),
                a.addClass("selected_language")) : a.removeClass("selected_language")
            })
        }
        let n = e(".languageSwitcher");
        n.html(' <span i18n="language_choice_message"></span>'),
        n.append(' <a href="#" i18n="language_default_pretty" lang="DEFAULT"></a>'),
        l.getLanguagesAvailables().forEach(t=>{
            n.append(` <a href="#" lang="${t}" i18n="language_${t}"></a>`)
        }
        ),
        n.find("a").each((t,i)=>{
            e(i).click(()=>{
                const a = e(i).attr("lang");
                a && l.selectedLanguage != a && (l.changeLanguage(a),
                c(a))
            }
            )
        }
        ),
        c(l.selectedLanguage),
        l.localizePage(),
        d.sponsor.loadSponsorTile("landing", e("div.tab_sponsor")),
        s.content_ready(g)
    }
    )
}
;
o.cleanup = function(g) {
    g && g()
}
;
u.landing = o;
export {o as landing};