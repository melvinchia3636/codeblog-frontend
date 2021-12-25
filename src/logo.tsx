import React from "react";
import { useHistory } from "react-router-dom";

interface ILogo {
    page: number;
    setPage(page: number): void;
}

const Logo: React.FC<ILogo> = ({ page, setPage }: ILogo): JSX.Element => {
    const history = useHistory();

    return <svg onClick={() => {history.push("/"); setPage(0);}} className="cursor-pointer" width="160" height="61" viewBox="0 0 160 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`transition-all logo1 page-${page}`} d="M10.9065 23.0147C10.9065 23.1271 10.8747 23.2075 10.8112 23.2557C10.7477 23.2878 10.6683 23.2798 10.5731 23.2316L0.976044 18.8456C0.833161 18.7653 0.761719 18.6528 0.761719 18.5082V16.5562C0.761719 16.3956 0.833161 16.2831 0.976044 16.2188L10.5731 11.8329C10.6365 11.8007 10.6842 11.7847 10.716 11.7847C10.843 11.7847 10.9065 11.873 10.9065 12.0498V14.1463C10.9065 14.2909 10.835 14.4034 10.6921 14.4837L3.76228 17.4479C3.66702 17.4961 3.66702 17.5443 3.76228 17.5925L10.6921 20.5807C10.835 20.645 10.9065 20.7575 10.9065 20.9181V23.0147Z" fill="#393939"/>
        <path className={`transition-all logo2 page-${page}`} d="M21.9851 24.2913C20.7944 24.2913 19.7466 24.0584 18.8417 23.5925C17.9367 23.1105 17.2382 22.4438 16.746 21.5923C16.2538 20.7408 16.0078 19.7527 16.0078 18.6281V12.6757C16.0078 11.5511 16.2538 10.5631 16.746 9.71158C17.2382 8.86007 17.9367 8.20142 18.8417 7.73549C19.7466 7.26957 20.7944 7.03662 21.9851 7.03662C23.1599 7.03662 24.1998 7.26155 25.1047 7.71139C26.0097 8.1612 26.7082 8.79583 27.2004 9.61519C27.6925 10.4345 27.9386 11.3825 27.9386 12.4588C27.9386 12.5392 27.9068 12.6115 27.8433 12.6757C27.7957 12.7239 27.7322 12.748 27.6528 12.748L25.4619 12.8685C25.2714 12.8685 25.1762 12.7802 25.1762 12.6034C25.1762 11.6555 24.8825 10.8924 24.2951 10.3141C23.7235 9.73568 22.9535 9.4465 21.9851 9.4465C21.0166 9.4465 20.2387 9.73568 19.6513 10.3141C19.0639 10.8924 18.7702 11.6555 18.7702 12.6034V18.7486C18.7702 19.6804 19.0639 20.4355 19.6513 21.0139C20.2387 21.5923 21.0166 21.8815 21.9851 21.8815C22.9535 21.8815 23.7235 21.6003 24.2951 21.038C24.8825 20.4596 25.1762 19.6965 25.1762 18.7486C25.1762 18.5719 25.2714 18.4835 25.4619 18.4835L27.6528 18.5799C27.7322 18.5799 27.7957 18.604 27.8433 18.6522C27.9068 18.7004 27.9386 18.7567 27.9386 18.8209C27.9386 19.9134 27.6925 20.8774 27.2004 21.7128C26.7082 22.5321 26.0097 23.1667 25.1047 23.6166C24.1998 24.0664 23.1599 24.2913 21.9851 24.2913ZM39.5216 24.3395C38.3309 24.3395 37.2752 24.0985 36.3544 23.6166C35.4336 23.1186 34.7192 22.4197 34.2111 21.52C33.719 20.6203 33.4729 19.584 33.4729 18.4112V12.9167C33.4729 11.76 33.7269 10.7398 34.2349 9.85618C34.743 8.95646 35.4494 8.26566 36.3544 7.78368C37.2752 7.28564 38.3309 7.03662 39.5216 7.03662C40.7282 7.03662 41.784 7.28564 42.6889 7.78368C43.6097 8.26566 44.3241 8.95646 44.8321 9.85618C45.3402 10.7398 45.5942 11.76 45.5942 12.9167V18.4112C45.5942 19.584 45.3402 20.6203 44.8321 21.52C44.3241 22.4197 43.6097 23.1186 42.6889 23.6166C41.784 24.0985 40.7282 24.3395 39.5216 24.3395ZM39.5216 21.9297C40.5218 21.9297 41.3235 21.6164 41.9268 20.9898C42.5301 20.3632 42.8318 19.5358 42.8318 18.5076V12.8926C42.8318 11.8483 42.5301 11.0129 41.9268 10.3863C41.3235 9.75978 40.5218 9.4465 39.5216 9.4465C38.5373 9.4465 37.7435 9.75978 37.1402 10.3863C36.5369 11.0129 36.2353 11.8483 36.2353 12.8926V18.5076C36.2353 19.5358 36.5369 20.3632 37.1402 20.9898C37.7435 21.6164 38.5373 21.9297 39.5216 21.9297ZM51.9309 24.0985C51.8515 24.0985 51.7801 24.0744 51.7166 24.0262C51.669 23.962 51.6452 23.8897 51.6452 23.8094V7.5186C51.6452 7.43826 51.669 7.374 51.7166 7.32581C51.7801 7.26155 51.8515 7.22941 51.9309 7.22941H57.7415C58.8687 7.22941 59.861 7.43024 60.7183 7.83188C61.5756 8.2335 62.2344 8.81187 62.6948 9.56699C63.1711 10.306 63.4092 11.1735 63.4092 12.1697V19.1583C63.4092 20.1544 63.1711 21.0299 62.6948 21.7851C62.2344 22.5241 61.5756 23.0945 60.7183 23.4961C59.861 23.8977 58.8687 24.0985 57.7415 24.0985H51.9309ZM54.4076 21.5682C54.4076 21.6485 54.4472 21.6887 54.5266 21.6887H57.8606C58.702 21.6887 59.3688 21.4236 59.861 20.8934C60.369 20.3472 60.631 19.6242 60.6468 18.7245V12.6275C60.6468 11.7118 60.3928 10.9888 59.8848 10.4586C59.3767 9.91243 58.6941 9.63929 57.8368 9.63929H54.5266C54.4472 9.63929 54.4076 9.67943 54.4076 9.75978V21.5682ZM80.6308 9.3501C80.6308 9.43046 80.5988 9.50275 80.5356 9.56699C80.4879 9.61519 80.4239 9.63929 80.3451 9.63929H72.2243C72.1449 9.63929 72.1053 9.67943 72.1053 9.75978V14.2662C72.1053 14.3466 72.1449 14.3867 72.2243 14.3867H77.6779C77.7568 14.3867 77.8208 14.4189 77.8684 14.4831C77.9317 14.5313 77.9637 14.5956 77.9637 14.6759V16.5074C77.9637 16.5878 77.9317 16.6601 77.8684 16.7243C77.8208 16.7725 77.7568 16.7966 77.6779 16.7966H72.2243C72.1449 16.7966 72.1053 16.8368 72.1053 16.9171V21.5682C72.1053 21.6485 72.1449 21.6887 72.2243 21.6887H80.3451C80.4239 21.6887 80.4879 21.7208 80.5356 21.7851C80.5988 21.8333 80.6308 21.8975 80.6308 21.9779V23.8094C80.6308 23.8897 80.5988 23.962 80.5356 24.0262C80.4879 24.0744 80.4239 24.0985 80.3451 24.0985H69.6286C69.5492 24.0985 69.4778 24.0744 69.4143 24.0262C69.3667 23.962 69.3429 23.8897 69.3429 23.8094V7.5186C69.3429 7.43826 69.3667 7.374 69.4143 7.32581C69.4778 7.26155 69.5492 7.22941 69.6286 7.22941H80.3451C80.4239 7.22941 80.4879 7.26155 80.5356 7.32581C80.5988 7.374 80.6308 7.43826 80.6308 7.5186V9.3501Z" fill="#393939"/>
        <path className={`transition-all logo2 page-${page}`} d="M89.1892 31.1174C89.0939 31.1656 89.0939 31.2138 89.1892 31.262C90.8085 32.0332 91.6182 33.3586 91.6182 35.2383C91.6182 36.7646 91.1099 37.9293 90.0941 38.7326C89.0939 39.5198 87.7842 39.9135 86.1648 39.9135H80.1637C80.0841 39.9135 80.0126 39.8894 79.9494 39.8412C79.9017 39.777 79.8779 39.7047 79.8779 39.6243V23.3335C79.8779 23.2532 79.9017 23.1889 79.9494 23.1407C80.0126 23.0765 80.0841 23.0444 80.1637 23.0444H85.9743C87.7045 23.0444 89.0381 23.4219 89.975 24.177C90.912 24.9321 91.3801 26.0727 91.3801 27.599C91.3801 29.2859 90.65 30.4587 89.1892 31.1174ZM82.7594 25.4542C82.6798 25.4542 82.6403 25.4944 82.6403 25.5747V30.033C82.6403 30.1133 82.6798 30.1535 82.7594 30.1535H85.9743C86.816 30.1535 87.4746 29.9526 87.9509 29.551C88.4428 29.1333 88.6891 28.563 88.6891 27.84C88.6891 27.101 88.4428 26.5226 87.9509 26.1049C87.4746 25.6711 86.816 25.4542 85.9743 25.4542H82.7594ZM86.1648 37.4795C86.9901 37.4795 87.6413 37.2546 88.1176 36.8047C88.6095 36.3549 88.8558 35.7444 88.8558 34.9732C88.8558 34.186 88.6095 33.5755 88.1176 33.1417C87.6257 32.6919 86.9589 32.467 86.1172 32.467H82.7594C82.6798 32.467 82.6403 32.5071 82.6403 32.5875V37.359C82.6403 37.4394 82.6798 37.4795 82.7594 37.4795H86.1648ZM97.9542 39.9135C97.8753 39.9135 97.8039 39.8894 97.7399 39.8412C97.6923 39.777 97.6684 39.7047 97.6684 39.6243V23.3335C97.6684 23.2532 97.6923 23.1889 97.7399 23.1407C97.8039 23.0765 97.8753 23.0444 97.9542 23.0444H100.145C100.225 23.0444 100.288 23.0765 100.336 23.1407C100.4 23.1889 100.431 23.2532 100.431 23.3335V37.3831C100.431 37.4635 100.471 37.5036 100.55 37.5036H108.528C108.607 37.5036 108.67 37.5358 108.718 37.6C108.782 37.6482 108.813 37.7124 108.813 37.7928V39.6243C108.813 39.7047 108.782 39.777 108.718 39.8412C108.67 39.8894 108.607 39.9135 108.528 39.9135H97.9542ZM119.754 40.1545C118.564 40.1545 117.508 39.9135 116.587 39.4315C115.667 38.9335 114.952 38.2346 114.444 37.3349C113.952 36.4352 113.706 35.399 113.706 34.2262V28.7317C113.706 27.5749 113.959 26.5547 114.468 25.6711C114.976 24.7714 115.682 24.0806 116.587 23.5986C117.508 23.1006 118.564 22.8516 119.754 22.8516C120.961 22.8516 122.017 23.1006 122.922 23.5986C123.842 24.0806 124.557 24.7714 125.065 25.6711C125.573 26.5547 125.827 27.5749 125.827 28.7317V34.2262C125.827 35.399 125.573 36.4352 125.065 37.3349C124.557 38.2346 123.842 38.9335 122.922 39.4315C122.017 39.9135 120.961 40.1545 119.754 40.1545ZM119.754 37.7446C120.755 37.7446 121.556 37.4313 122.16 36.8047C122.763 36.1782 123.065 35.3508 123.065 34.3226V28.7076C123.065 27.6633 122.763 26.8279 122.16 26.2013C121.556 25.5747 120.755 25.2614 119.754 25.2614C118.77 25.2614 117.977 25.5747 117.373 26.2013C116.769 26.8279 116.468 27.6633 116.468 28.7076V34.3226C116.468 35.3508 116.769 36.1782 117.373 36.8047C117.977 37.4313 118.77 37.7446 119.754 37.7446ZM137.45 40.1063C136.26 40.1063 135.212 39.8733 134.307 39.4074C133.402 38.9254 132.703 38.2507 132.211 37.3831C131.719 36.5156 131.473 35.5195 131.473 34.3949V28.563C131.473 27.4223 131.719 26.4262 132.211 25.5747C132.703 24.7072 133.402 24.0405 134.307 23.5745C135.212 23.0926 136.26 22.8516 137.45 22.8516C138.625 22.8516 139.657 23.0845 140.546 23.5504C141.451 24.0164 142.15 24.6509 142.642 25.4542C143.134 26.2575 143.38 27.1652 143.38 28.1774V28.3702C143.38 28.4505 143.348 28.5228 143.285 28.5871C143.237 28.6353 143.174 28.6594 143.094 28.6594H140.927C140.848 28.6594 140.776 28.6353 140.713 28.5871C140.665 28.5228 140.641 28.4505 140.641 28.3702V28.2497C140.641 27.3821 140.348 26.6672 139.76 26.1049C139.189 25.5426 138.419 25.2614 137.45 25.2614C136.482 25.2614 135.704 25.5587 135.117 26.1531C134.529 26.7315 134.236 27.5026 134.236 28.4666V34.4913C134.236 35.4552 134.545 36.2344 135.164 36.8288C135.783 37.4072 136.585 37.6964 137.569 37.6964C138.522 37.6964 139.268 37.4474 139.808 36.9493C140.364 36.4352 140.641 35.7363 140.641 34.8527V33.3586C140.641 33.2783 140.602 33.2381 140.522 33.2381H137.593C137.514 33.2381 137.442 33.214 137.379 33.1658C137.331 33.1016 137.308 33.0293 137.308 32.9489V31.1656C137.308 31.0853 137.331 31.021 137.379 30.9728C137.442 30.9086 137.514 30.8764 137.593 30.8764H143.094C143.174 30.8764 143.237 30.9086 143.285 30.9728C143.348 31.021 143.38 31.0853 143.38 31.1656V34.2503C143.38 36.0978 142.841 37.5358 141.761 38.564C140.697 39.5921 139.26 40.1063 137.45 40.1063Z" fill="#393939"/>
        <path className={`transition-all logo1 page-${page}`} d="M148.817 39.0462C148.754 39.0783 148.706 39.0944 148.674 39.0944C148.547 39.0944 148.483 39.006 148.483 38.8293V36.7327C148.483 36.5721 148.555 36.4596 148.698 36.3953L155.628 33.4071C155.723 33.3589 155.723 33.3107 155.628 33.2625L148.698 30.2983C148.555 30.218 148.483 30.1055 148.483 29.961V27.8644C148.483 27.7519 148.515 27.6796 148.579 27.6475C148.642 27.5993 148.722 27.5993 148.817 27.6475L158.414 32.0334C158.557 32.0977 158.628 32.2102 158.628 32.3708V34.3228C158.628 34.4674 158.557 34.5799 158.414 34.6602L148.817 39.0462Z" fill="#393939"/>
        <path className={`transition-all logo1 stroke page-${page}`} d="M89.1827 4.35596L72.0664 45.0226" stroke="#393939" strokeWidth="3"/>
    </svg>;
	
};

export default Logo;