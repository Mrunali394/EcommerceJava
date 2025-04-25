package com.ecomapp.controller;

@RestController
@RequestMapping("/api/admin")

public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @PostMapping("/login")
    public ResponseEntity<AdminResponse> login(@RequestBody AdminRequest request) {
        return ResponseEntity.ok(adminService.login(request));
    }

    @PostMapping("/register")
    public ResponseEntity<AdminResponse> register(@RequestBody AdminRequest request) {
        return ResponseEntity.ok(adminService.register(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok().build();
    }


}
