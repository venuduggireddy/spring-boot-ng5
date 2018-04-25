/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.vencore.ng.controller.repository;
import com.vencore.ng.controller.domain.User;
import org.springframework.data.repository.Repository;

/**
 *
 * @author 500540
 */


import java.util.List;

public interface UserRepository extends Repository<User, Integer> {

    void delete(User user);

    List findAll();

    User findOne(int id);

    User save(User user);
}