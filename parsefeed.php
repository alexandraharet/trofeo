<?php

    $content = file_get_contents('http://www.trofeoverduci.it/feed/');
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
