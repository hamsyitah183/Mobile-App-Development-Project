<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<?php $count = $data->num_rows();?>
                
<div class="container">
    <h1 class = "text-center pt-3"><span class = "element"></span></h1>

    <div class="row">
        <div class="col-lg-12">
            <h3 class = "text-center">What is our web app can do ? </h3>

            <p class = "text-center intro">
                Our app are able to scan and identify 6 types of flower which are <br> Sunflower, Rafflesia, Tulip, Orchid, Rose, Jasmine 
            </p>
        </div>

        <div class="col-lg-12 center">
            <a href="<?=base_url();?>Welcome/app" class = "btn btn-success click">click to start scan</a>
        </div>
    </div>

   <p class = "pb-3 info"> <span class="material-symbols-outlined">info</span> Info</p>
    <div class="flowerTab">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
        <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><?= $data->row(0)->name;?></a>
        </li>

        <?php for($i = 1; $i <$count; $i++) { ;?>
        <li class="nav-item">
            <a class="nav-link" id="pills-<?= $data->row($i)->id;?>-tab" data-toggle="pill" href="#pills-<?= $data->row($i)->id;?>" role="tab" aria-controls="pills-<?= $data->row($i)->id;?>" aria-selected="false"><?= $data->row($i)->name;?></a>
        </li>
        <?php };?>
        
    </ul>
    <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

        <div class="row">
            <div class="col-lg-4">
                <img src="<?= $data->row(0)->link;?>" class = "img-fluid" alt="" srcset="">
            </div>

            <div class="col-lg-8">
                <h3><?= $data->row(0)->name;?></h3>
                <h4 class="font-italic"><?= $data->row(0)->scientificName;?></h4>
                <p class = "justify-content">
                    <?=$data->row(0)->description;?>
                </p>
            </div>
        </div>

        </div>

        <!-- Detail from 1 to 6 -->
        <?php for($i = 1; $i < $count; $i++) {?>
            <div class="tab-pane fade" id="pills-<?=$data->row($i)->id;?>" role="tabpanel" aria-labelledby="pills-<?= $data->row($i)->id;?>-tab">

                <div class="row">
                    <div class="col-lg-4">
                        <img src="<?= $data->row($i)->link;?>" class = "img-fluid" alt="" srcset="">
                    </div>

                    <div class="col-lg-8">
                        <h3><?= $data->row($i)->name;?></h3>
                        <h4 class="font-italic"><?= $data->row($i)->scientificName;?></h4>
                        <p class = "justify-content">
                            <?=$data->row($i)->description;?>
                        </p>
                    </div>
                </div>
            </div>
        <?php }?>
    </div>
    </div>


        
</div>
        

    
<script>
        $(document).ready(function(){
    
        var typed= new Typed(".element",{
            strings: ["Welcome to group 7's sites"],
            smartBackspace:true,
            typeSpeed:50,
            backSpeed:30,
            loop:true,
            loopCount:Infinity,
            startDelay:1000
        
        });
    

});

    </script>
 <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
