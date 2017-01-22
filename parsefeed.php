<?php

//    $opts = array('http'=>array('header' => "User-Agent:MyAgent/1.0\r\n"));
//    $context = stream_context_create($opts);
//    $content = file_get_contents('http://www.trofeoverduci.it/feed/', false,$context);

    $curl = curl_init("http://www.trofeoverduci.it/feed/");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $content = curl_exec($curl);
    curl_close($curl);

    $x = new SimpleXmlElement($content);
    foreach($x->channel->item as $entry) {
        $mycontent = (string) $entry->children("content", true);
        preg_match('/< *img[^>]*src *= *["\']?([^"\']*)/i', $mycontent, $images);
        $image = "images/newsplaceholder.jpg";
        if($images && sizeof($images) > 0) $image = $images[1];
        $json['item'][] = array("title"=>$entry->title,
                                "link"=>$entry->link,
                                "date"=>$entry->pubDate,
                                "image"=>$image);
        }
    echo json_encode($json);


?>
