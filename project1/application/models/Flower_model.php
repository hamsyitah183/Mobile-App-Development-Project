<?php

class Flower_model extends CI_Model {
    

    public function flower() {
        $query = $this->db->get('flower');

        return $query;
    }
}