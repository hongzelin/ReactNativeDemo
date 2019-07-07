import { createIconSet } from 'react-native-vector-icons';


const glyphMap = { "shape-polygon-add": "59545", "gun-bubble-blue": "59581", "sun-o": "59593", "triangle-o": "60209", "search1": "58881", "move": "58882", "polygon": "58883", "layers-simple-line": "58884", "User-o-": "58885", "password-o-": "58886", "Mask": "58888", "warnning-o": "58889", "judicial": "58890", "location-focus": "58891", "map-simple": "58892", "loopline": "58893", "sticking-point": "58894", "visiblerange": "58895", "star-customer": "58896", "high-search": "58897", "precise-search": "58898", "smart-search": "58899", "map": "58900", "tie": "58901", "mediation-power": "58902", "personnel-data": "58903", "ellipse-vertical": "58904", "judicial-circle": "58905", "judicial-circle": "58906", "increase-circle": "58907", "trend-chart": "58908", "total-pillars": "58909", "total-records": "58910", "video-command": "58911", "head-analysis": "58912", "disconnect": "58914", "approval": "58929", "ant-design": "58930", "api": "58931", "appstore-o": "58932", "area-chart": "58933", "trend": "58934", "appstore": "58935", "arrow-down": "58936", "arrow-left": "58937", "arrow-right": "58938", "arrows-alt": "58939", "arrow-up": "58940", "backward": "58941", "bar-chart": "58942", "bank": "58943", "barcode": "58944", "bars": "58945", "bar2-chart": "58946", "bell": "58947", "bulb": "58948", "book": "58949", "calculator": "58950", "camera-o": "58951", "calendar": "58952", "car": "58953", "caret-up-circle-o": "58954", "caret-down": "58955", "caret-right": "58956", "caret-left": "58957", "caret-up": "58958", "schedule": "58959", "check-circle-o": "58960", "check-square-o": "58961", "check-circle": "58962", "check-square": "58963", "check": "58964", "camera": "58965", "clock-circle-o": "58966", "cloud-download": "58967", "circle-o": "58968", "clock-circle": "58969", "close-circle": "58970", "close-circle-o": "58971", "close": "58972", "close-square-o": "58973", "cloud-o": "58974", "close-square": "58975", "cloud": "58976", "code-o": "58977", "code": "58978", "copy": "58979", "contacts": "58980", "copyright": "58981", "credit-card": "58982", "customer-service": "58983", "dashboard": "58984", "database": "58985", "delete": "58986", "compare": "58987", "desktop": "58988", "dimension": "58989", "cut-picture": "58990", "heatmap": "58991", "dislike": "58992", "dot-chart": "58993", "dislike-o": "58994", "scan-open": "58995", "angle": "58996", "down-circle": "58997", "down-circle-o": "58998", "down-square-o": "58999", "down": "59000", "down-square": "59001", "download": "59002", "edit": "59003", "global": "59004", "enter": "59005", "ellipsis": "59006", "environment": "59007", "environment-o": "59008", "exception": "59009", "warning": "59010", "exclamation-circle-o": "59011", "exclamation-circle": "59012", "exclamation": "59013", "export": "59014", "eye-o": "59015", "eye": "59016", "scan-exit": "59017", "profile-1": "59018", "file": "59019", "location-point-red": "59020", "location-point-red": "59021", "filter": "59022", "compass": "59023", "flag": "59024", "folder": "59025", "female": "59026", "fork": "59027", "forward": "59028", "frown-o": "59029", "frown": "59030", "gift": "59031", "track-point-red": "59032", "full-screen": "59033", "height": "59034", "track-point-red": "59035", "hdd": "59036", "heart-o": "59037", "home": "59038", "heart": "59039", "hourglass": "59040", "square-o": "59041", "idcard": "59042", "location-person": "59043", "inbox": "59044", "indent-left": "59045", "indent-right": "59046", "info-circle-o": "59047", "info": "59048", "info-circle": "59049", "key": "59050", "shop": "59051", "file-jpg": "59052", "laptop": "59053", "layout": "59054", "left-circle-o": "59055", "left-square-o": "59056", "left-square": "59057", "left": "59058", "left-circle": "59059", "link": "59060", "loading-3-quarters": "59061", "loading": "59062", "lock": "59063", "login": "59064", "logout": "59065", "mail": "59066", "man": "59067", "male": "59068", "meh-o": "59069", "meh": "59070", "menu-fold": "59071", "menu-unfold": "59072", "location": "59073", "mute": "59074", "message": "59075", "minus-circle-o": "59076", "minus-circle": "59077", "minus-square-o": "59078", "minus": "59079", "minus-square": "59080", "mobile": "59081", "notification": "59082", "paper-clip": "59083", "pause-circle-o": "59084", "pause": "59085", "pause-circle": "59086", "pay-circle-o": "59087", "pay-circle": "59088", "file-pdf": "59089", "phone": "59090", "picture": "59091", "pie-chart": "59092", "play-circle-o": "59093", "play-circle": "59094", "plus-circle-o": "59095", "plus-square-o": "59096", "plus-circle": "59097", "plus-square": "59098", "plus": "59099", "poweroff": "59100", "printer": "59101", "file-ppt": "59102", "pushpin-o": "59103", "pushpin": "59104", "question-circle-o": "59105", "qrcode": "59106", "question-circle": "59107", "question": "59108", "red-envelope": "59109", "reload": "59110", "retweet": "59111", "right-circle-o": "59112", "coffee": "59113", "right-circle": "59114", "right-square-o": "59115", "right-square": "59116", "right": "59117", "rollback": "59118", "rocket": "59119", "safety": "59120", "save": "59121", "scan": "59122", "select": "59123", "search": "59124", "setting": "59125", "shake": "59126", "share-alt": "59127", "shrink": "59128", "skin": "59129", "smile-o": "59130", "smile": "59131", "solution": "59132", "sound": "59133", "star": "59134", "star-o": "59135", "swap": "59136", "sync": "59137", "switcher": "59138", "tablet": "59139", "tag-o": "59140", "tags": "59141", "tag": "59142", "team": "59143", "camera-point-samll": "59144", "tool": "59145", "trademark": "59146", "trophy": "59147", "police-avatar": "59148", "revoke-o": "59149", "unlock": "59150", "up-circle": "59151", "up-circle-o": "59152", "up-square-o": "59153", "up-square": "59154", "up": "59155", "usb": "59156", "upload": "59157", "user": "59158", "police": "59159", "call-close": "59160", "wallet": "59161", "relation": "59162", "send": "59163", "speed-portrait": "59164", "wifi": "59165", "card": "59166", "speed-transverse": "59167", "woman": "59168", "human": "59169", "step-backward": "59170", "step-forward": "59171", "cloud-download-o": "59172", "double-left": "59173", "file-excel": "59174", "cloud-upload": "59175", "double-right": "59176", "cloud-upload-o": "59177", "fast-backward": "59178", "file-add": "59179", "file-text": "59180", "fast-forward": "59181", "file-unknown": "59182", "file-word": "59183", "folder-add": "59184", "folder-open": "59185", "form": "59186", "like-o": "59187", "like": "59188", "line-chart": "59189", "medicine-box": "59190", "shopping-cart": "59191", "swap-left": "59192", "profile": "59193", "table": "59194", "swap-right": "59195", "tags-o": "59196", "usergroup-delete": "59197", "to-top": "59198", "user-delete": "59199", "usergroup-add": "59200", "user-add": "59201", "verticle-right": "59202", "video-camera": "59203", "verticle-left": "59204", "moon-o": "59205", "thing": "59206", "voice-message": "59207", "vioce": "59208", "cancel-call": "59209", "world": "59210", "building": "59211", "street": "59212", "empty-box": "59213", "nodetial": "59214", "record": "59215", "location-reback": "59216", "airport": "59217", "file-text-o": "59218", "call": "59219", "close-voice": "59220", "2d": "59221", "feedback": "59222", "gun": "59223", "internet-cafe": "59224", "lawshot": "59225", "hotel": "59226", "in-conversation": "59227", "voice-call": "59228", "img": "59229", "room": "59230", "open-voice": "59231", "monitor": "59232", "take-photo": "59233", "location-point-solid": "59234", "grid-5": "59235", "pack-down": "59236", "pack-up": "59237", "panoramic-camera": "59238", "perception-basement": "59239", "no-img": "59240", "cellphone": "59241", "perception": "59242", "person": "59243", "wifi-rotate45": "59244", "phone-reverse": "59245", "relationship": "59246", "3d": "59247", "grid-8": "59248", "police-car": "59249", "success": "59250", "smart-glass": "59251", "shot": "59252", "switch": "59253", "send-o": "59254", "toll": "59255", "uav": "59256", "gun-bubble-black": "59257", "train": "59258", "alarm": "59259", "gun-bubble-blue": "59260", "all": "59261", "keyboard": "59262", "accommodation": "59263", "international-relation": "59264", "carpark": "59265", "bus-stop": "59266", "plus-bold": "59267", "fingerprint": "59268", "bank-solid": "59269", "dna": "59270", "atm": "59271", "location-blue": "59272", "hammer": "59273", "help": "59274", "tick": "59275", "job": "59276", "prove": "59277", "checkpoint": "59278", "entertainment": "59279", "gesture": "59280", "gas-station": "59281", "hospital": "59282", "fire-hydrant": "59283", "news": "59284", "organization": "59285", "logistics": "59286", "park": "59287", "muslim": "59288", "procuratorate": "59289", "scenic-spot": "59290", "school": "59291", "post-office": "59292", "shooting-range": "59293", "shopping-mall": "59294", "ticket-office": "59295", "traffic-facilities": "59296", "gun-rotate": "59297", "special-industry": "59298", "warehouse": "59299", "venue": "59300", "port": "59301", "religion": "59302", "train-station": "59303", "video-speed": "59304", "cb-logo": "59305", "discern": "59306", "message-bell": "59307", "zoom-in": "59308", "zoom-out": "59309", "screenshot": "59310", "pointer-move": "59311", };

let glyphMapValToInt = {};
for (let key in glyphMap) {
  glyphMapValToInt[key] = parseInt(glyphMap[key]); //取得value      
}

const MyIcon = createIconSet(glyphMapValToInt, 'iconfont', 'iconfont.ttf');

export default MyIcon;


