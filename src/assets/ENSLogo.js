export function ENSLogo({ style }) {
    const fill = style === 'blue' ? '#5d83f6' : 'white';

    return (
        <svg
            width="91"
            height="40"
            viewBox="0 0 91 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
        >
            <g clip-path="url(#clip0_3_75)">
                <path
                    d="M4.71225 9.4113C5.0886 8.71657 5.63175 8.12429 6.29378 7.68672L17.4043 0L6.02023 18.6501C6.02023 18.6501 5.02555 16.9848 4.63763 16.1421C4.15422 15.0826 3.91042 13.9312 3.9233 12.7685C3.93619 11.6059 4.20548 10.46 4.71225 9.4113ZM0.12679 22.2767C0.252236 24.0602 0.760845 25.7966 1.61856 27.3695C2.47628 28.9426 3.6633 30.3157 5.10016 31.3973L17.3893 39.8872C17.3893 39.8872 9.70051 28.909 3.21526 17.985C2.55868 16.8309 2.1173 15.569 1.91223 14.2599C1.82145 13.6671 1.82145 13.064 1.91223 12.4712C1.74313 12.7817 1.41489 13.4173 1.41489 13.4173C0.75731 14.746 0.309466 16.1668 0.087004 17.6302C-0.0410432 19.1771 -0.0277268 20.7322 0.12679 22.2767ZM31.459 23.7549C31.061 22.9123 30.0764 21.2468 30.0764 21.2468L18.7123 39.8872L29.8227 32.2054C30.4848 31.7678 31.0279 31.1756 31.4043 30.4809C31.9111 29.4321 32.1803 28.2862 32.1933 27.1237C32.2062 25.961 31.9623 24.8095 31.4789 23.75L31.459 23.7549ZM35.9698 17.6154C35.8443 15.832 35.3357 14.0955 34.4781 12.5226C33.6203 10.9496 32.4333 9.57638 30.9964 8.49482L18.7271 0C18.7271 0 26.411 10.9782 32.9013 21.9022C33.5561 23.0567 33.9957 24.3185 34.1993 25.6273C34.2901 26.2201 34.2901 26.8232 34.1993 27.416C34.3684 27.1055 34.6966 26.4699 34.6966 26.4699C35.3542 25.1412 35.8021 23.7204 36.0245 22.257C36.1542 20.7102 36.1426 19.1551 35.9898 17.6105L35.9698 17.6154Z"
                    fill={fill}
                />
                <path
                    d="M56.3481 28.2927V25.0902H48.7674V21.0502H55.6297V18.0202H48.7674V14.0295H56.3481V10.8271H45.3487V28.2927H56.3481Z"
                    fill={fill}
                />
                <path
                    d="M74.6831 28.2927V10.8271H71.2643V22.3805L63.9561 10.8271H59.6951V28.2927H63.1138V15.9017L71.0909 28.2927H74.6831Z"
                    fill={fill}
                />
                <path
                    d="M90.6493 14.9902C90.2529 13.0195 88.6179 10.4576 84.3568 10.4576C81.0371 10.4576 78.2377 12.8224 78.2377 15.9263C78.2377 18.5622 80.0462 20.3605 82.8456 20.9271L85.2982 21.4198C86.6607 21.6907 87.4287 22.479 87.4287 23.489C87.4287 24.7207 86.413 25.6322 84.5798 25.6322C82.1024 25.6322 80.8885 24.0802 80.7398 22.3559L77.5688 23.1934C77.8413 25.6815 79.8976 28.6622 84.555 28.6622C88.6426 28.6622 90.897 25.9524 90.897 23.2673C90.897 20.8039 89.1876 18.7346 85.9919 18.1188L83.5393 17.6507C82.251 17.4044 81.6317 16.6407 81.6317 15.68C81.6317 14.5222 82.7217 13.4629 84.3816 13.4629C86.6112 13.4629 87.4039 14.9656 87.5774 15.9263L90.6493 14.9902Z"
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_3_75">
                    <rect width="91" height="40" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    );
}