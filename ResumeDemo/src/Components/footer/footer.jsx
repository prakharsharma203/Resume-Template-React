import "./footer.css"

export function Footer(){
    return(
        <>
        <div className="last">
            <pre><b>Writing</b>        🔵🔵🔵🔵🔵</pre>
            <pre><b>Editing</b>        🔵🔵🔵🔵</pre>
            <pre><b>Social Media</b>   🔵🔵🔵</pre>
            <pre><b>Researching</b>    🔵🔵🔵🔵🔵</pre>
            <pre><b>SEO</b>            🔵🔵🔵🔵</pre>
        </div>
        <div className="last2">
            <pre>Zapie  Organize Your Life with the Agile Method</pre>   
            <pre className="p6">Spoke  Is 40 hours a week too much? Here's what history</pre>   
            <pre className="p7">nDash   Why Generalist Writers Lead to Lost Profits in B2B Tech</pre>
            <div className="divt"></div>
            <div className="iconl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXkBPml73s6XGrvfIYEi2Gy6S2rrXd7Epkw&s" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX09fc2Nzv09fn8/f/m5+n5+vwWFx2mp6kwMTVyc3YbHB8rLC6Wl5kpKi+SkpTz9PbX2NwgISY7PEDd3uKvsLIdHiQkJSoqKy3r7O6/wMPKy8w2NznQ0dRBQkQYGh0ZGiBiYmZZWl5pam2dnqC2t7tQUVOKi4yhCyggAAADaElEQVR4nO3di3KaQBhAYWRdJQIuJKJ4SYjm8v6PWEGxmWmtK+V3Qc837aQzosMpaAR30fMAAAAAAAAAAAAAAAAAAAAA4OEZ1ysgT+vh9Yzuzf+Mr5avk6u9LSLles1t+avRoInioy+J6j1oVDiY92U3Vc/NAgfZi+tVt9S4MKWwK+rCMLUV97Mwjl4SS8t5Pwtnyrejk6ynhdqy0O9voeUderwNLe9AYedQ+IdHKvTPLeKfvaV9l1/7/+O3xeVFheu0snL6jW/r5Vg4tFradte4mtF59GTl8C4z2Notvbc7HFAGO6ulo6FQo96ki8BKfaxgt/SPe9gtvEhXIqd0fBMG67XdYZCwdZgL9Pl6NndddjK3fpm+qjCKXYedhFMKKex+YftnVim8LQoppNA9Cimk0D0KKaTQPQoppNA9Cu+gMJI5ExW6Dju5/3Ntiw+Rws8OndVfCnz65PvD1HXYSTpsP3BPfTUcNtq6YCsz1FZ/dmUjpkuhIeG66ajKtr1KjZbWm2bjt9s2SsQ+yVcf6cD1p8DrQTYWHPCuphPnhZNISQ541+M3ty+owdtYLrB6YJV8Ze4ag3SbCO6ix6e3Wu3idB7f3jyNn1ZKG/N7XVoOPLxT8j2t8s1sfHuzjVHar3Yl/SmRqKc7XQ8s005Uq1Gugn7/FimMJq+JuuUYwb/yfZU8pwJHwGVhGBTTfP/QxtH0JFPuoSr/LgKJY/yqcDCI42mitNhbikuroFXyPY9lzmKUhdURcJh+TZdJXj4v9k+IFl18tDxZTl+zsHxXJX2eJo6zkQtZXK/BA5yJopBCCp2jkEIK3aOQQgrdo5BCCt2jkEIK3aOQQgrdo5BCCt2jkEIK3aOQQgrdo5BCCt2jkEIK3aOwaWGX5pDKjKBduA47eYBCgZnO5RyH7sySTUXmW3imO9twIXD9Uq+cNDPqxjTZYCQx0bmkVtvrvwLIWpZlRXH21qIosvrf25Xc7C6dN/gep7blcheDlvXPq3X/vLGnfRcKvRtcrFyc9TYEAAAAAAAAAAAAAAAAbuZ4jWDj7GLBN2OO12C/D8Z49Zars/Y/hL4kww3t1Zd31sdMfVeb0Cu3lzmM+du3Gd3f0X/nmMNl5E0ZV0X65S56V9uwfOU0h+fj4U/1SnpXiRVz/Ovd2fZD7/0CCRqJ0DjInGAAAAAASUVORK5CYII=" alt="" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YCZ7nGuKwt4QU0NWpHzjw32awjzuglcIbw&s" alt="" />
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8BAQEAAAC5ublhYWGurq4fHx/7+/vv7++enp4ODg5bW1uTk5PFxcU+Pj7j4+M2NjbLy8vW1tbd3d329valpaWDg4Nvb2/q6uokJCR3d3cqKipMTEwyMjKNjY3S0tJnZ2cXFxdSUlJFRUU8PDx1dXW+vr6009WqAAAEz0lEQVR4nO2d65KqOhBGJcAgyogyiPcrM77/Ix5wDx036gGTNoTa3/o7ZaoXCUm6mUoGAwAAAAAAAAAAAAAAAAAAAAAAAAAAK0mHNpC+S2+YuNlx3DneIrokwTsED9lK2MI0/GL3C9xJ0bJjB0Uk4xm3oL+yxq9EiJxZ8etklWCpOI5ZDXO7/JxSMeScbg6W9WCJmCaMhsdKsOtJ9EoVyoXR8INaHXWOVIwYl/7fRsVpf3E7Z11FsxjyG+74F9rXcatovDcYTnlnaDXcEQwVgGFLhvGVpV4w9hqms2w7KcgXvtY0b61h4G9ozd7rbLisNUwmQu6M5hrBWGvoy71tkRhoBGOrYRrdbN7FVuNNtNVwML/tw7NGMNYazlY372GkEYy1hml4orn0qBObtYaDoe/tNiXbvdbGwV7DwSCeXdGsdtpsyAMMlYChUWCoBAyNAkMlYGgUGCoBQ6PAUAkYGgWGSsDQKDBUAoZGgaESMDQKDJWAoVFgqAQMjQJDJWBoFBgqAUOjwFAJGBoFhkrA0CgwVAKGRoGhEjA0CgyVgKFRYKgEDI0CQyVgaBQYKgFDo8BQCRgaBYZKwNAoMFQChkaBoRIwNAoMlfh3DHfJIOgaOqxI74SUJ4biHHXOfvsnGEes+U6GDJyqUTv4jWXOd0RraOEBrcVD5ztJOJ5aaejxTXuZjYKO+GY7anRmZReWx2kxvYfp2krBUpGpE92TXROpkIeieSyduDyS4Naag/WriD45DOm4Q5HP3HloAXOPQvpmEFzm9MB8huZYKKa+KiadMzR/ieh5HTWPjmUko23Nt3ZQSxIcuRyx8RDvqBP3um2NqansbXefKCBH1lRz63aQw4H7xgw9ZCfqJRhBzjcaeLlQJ6603h6/yqbFxIbk/hb5+iw0Jpt4S4M05IuNh4PgWMUiSnynb7l9SIdgT3u3XLkTDzl1IcvuiJdETjaqA6x4SlUb2/v2P01zV3Way3GqWJH6HFELtWkmiLrYbW9r18rEY1L0lASHP3KlqL2F+y4SRiHyw99h+DKtU7pTR64437UuTJwOBK9P+u/FfXikEM8KM+FQLvb1ol3UUc4vzrWc/rKhTbPCihHKQV5f7LsqTIm8PhgXslL98oqRkuDp7vHMuxmlRf5Wf9YxLdjOyyvGDz2dxf3O9iQ66EXxKN3N6FWqT0NNyD3R5sHFWPGpaWZ/B6NH1344Tyf8BsbUhetHf15mnnEWD3MIWUVavbTv8ukWso0NV1j9D+mYtqfrF3Y2S1nM0rmlwQg3O68XLpqb069ONpUuHpJmcvfcOtgvmRZaVH16xkzmGG1Li0Go8FQ6RFalRMtfJCO9Da1pvs6k+NPqB+nazgLic0LqEqdVl8xkKbIXXVgkCXL1PrZY9m8KiFwfIN+OS53YprQoNwn1XMViPOoVrzHHSGXKZV0B8Tmx/LrSuGJENKTH/Zhm/iArLo0jj75bffRgsZfIdHbSlEVVRSYxul7G2BtWtElpWgDkRNMzqgyj8SvGsqMaDBNtrqw799vwUUmiRtLnTnxYVbqjk4I2D6LdrdrlP3n10rGcb9p9ig9Ca/716TVG9c8Pzzlk593qo19sJl74SqawvPg9wz30JRMCAAAAAAAAAAAAAAAAAAAAAIA38h8Nw44PLMhuPgAAAABJRU5ErkJggg==" alt="" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXkBPml73s6XGrvfIYEi2Gy6S2rrXd7Epkw&s" alt="" />
            </div>
        </div>
        </>
    )
}