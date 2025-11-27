      SELECT 
        g.id_greenpoint,
        g.coordinates,
        g.description,
        g.qr_code,
        g.stars,
        g.id_citizen,
        g.id_collector,
        g.created_at,
        g.updated_at,
        g.status,
        c.name AS category_name
      FROM greenpoints g
      JOIN greenpoints_categories gc ON g.id_greenpoint = gc.id_greenpoint
      JOIN categories c ON gc.id_category = 1
      WHERE gc.id_category = $1 AND g.status = 'approved' OR g.status = 'pending' OR g.status = 'created'
      ORDER BY g.created_at DESC;