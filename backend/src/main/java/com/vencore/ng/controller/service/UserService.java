/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.vencore.ng.controller.service;

import com.vencore.ng.controller.domain.User;
import java.util.List;

/**
 *
 * @author 500540
 */
public interface UserService {
    
   
    public User create(User user);
    
    
    public User delete(int id);

   
    public List findAll();

   
    public User findById(int id);

   
    public User update(User user);
    
}
