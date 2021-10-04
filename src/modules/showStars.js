 import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import StarHalfSharpIcon from '@material-ui/icons/StarHalfSharp';
 const showStars=(stars)=>{
        if(stars==0){
            return <div>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==0.5){
            return <div>
                <StarHalfSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==1){
            return <div>
                <StarRateSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==1.5){
            return <div>
                <StarRateSharpIcon/>
                <StarHalfSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==2){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==2.5){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarHalfSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==3){
            return <div>
                 <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarBorderSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==3.5){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarHalfSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==4){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarBorderSharpIcon/>
            </div>
        }
        if(stars==4.5){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarHalfSharpIcon/>
            </div>
        }
        if(stars==5){
            return <div>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                <StarRateSharpIcon/>
                 <StarRateSharpIcon/>
            </div>
        }
    }
    export default showStars